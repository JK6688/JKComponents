import { defineComponent, onMounted, onUnmounted, computed, ref } from 'vue';
import type { SlotsType, PropType, ExtractPropTypes, Plugin } from 'vue';
import { isServer, withInstall } from '~/utils';

/** 新版官方库（OIDC 版，与旧的 telegram-widget.js 不是一套 API） */
const SCRIPT_SRC = 'https://oauth.telegram.org/js/telegram-login.js?6';

/** 手动 OIDC 流程用到的端点，供前端跳转和服务端参考 */
export const TG_OIDC = {
  issuer: 'https://oauth.telegram.org',
  authorization: 'https://oauth.telegram.org/auth',
  token: 'https://oauth.telegram.org/token',
  jwks: 'https://oauth.telegram.org/.well-known/jwks.json',
  discovery: 'https://oauth.telegram.org/.well-known/openid-configuration'
} as const;

/**
 * 官方 scope 名。`openid` 是文档要求必带的，组件会自动补齐，调用方不用管。
 * `write` 是库 InitOptions 里的写法，对应官方 scope 名 `telegram:bot_access`
 * （允许 bot 在登录后给用户发私信）。
 */
export type TelegramOidcScope = 'openid' | 'profile' | 'phone' | 'write';

const SCOPE_MAP: Record<TelegramOidcScope, string> = {
  openid: 'openid',
  profile: 'profile',
  phone: 'phone',
  write: 'telegram:bot_access'
};

/** 补齐必带的 openid 并去重，弹窗和跳转两条路径共用同一份 scope */
function normalizeScope(scope: TelegramOidcScope[]): string[] {
  return Array.from(new Set(['openid', ...scope.map((s) => SCOPE_MAP[s])]));
}

/** 默认申请的权限：只要基础资料 */
const DEFAULT_SCOPE: TelegramOidcScope[] = ['openid', 'profile'];
/** props.scope 在类型层是 optional（外层包了 Partial），运行时才有 default，取值要兜底 */
function getScope(scope?: TelegramOidcScope[]): TelegramOidcScope[] {
  return scope?.length ? scope : DEFAULT_SCOPE;
}

/** sessionStorage 里暂存 PKCE verifier 与 state 的 key（跳转前后同一个标签页） */
const VERIFIER_KEY = 'tg_login_code_verifier';
const STATE_KEY = 'tg_login_state';

/**
 * id_token（JWT）里解出来的用户信息
 *
 * @remarks 这里只是 base64 解出来的明文，**没有验签**。服务端必须：
 *  1. 从 TG_OIDC.jwks 取公钥验签（默认 RS256，可在 BotFather → Login Widget → Advanced 改）；
 *  2. 校验 iss === TG_OIDC.issuer；
 *  3. 校验 aud 等于自己的 bot id；
 *  4. 校验 exp 未过期；
 *  5. 校验 nonce 与下发的一致（防重放）。
 */
interface TgUserData {
  /** 签发方，恒为 https://oauth.telegram.org */
  iss: string;
  /** 受众，等于 bot id（JWT 里是字符串） */
  aud: string;
  /** 用户唯一标识 */
  sub: string;
  /** 签发时间 */
  iat: number;
  /** 过期时间 */
  exp: number;
  /** telegram user id（需要 profile scope） */
  id: number;
  name?: string;
  given_name?: string;
  family_name?: string;
  preferred_username?: string;
  picture?: string;
  /** 需要 phone scope */
  phone_number?: string;
  phone_number_verified?: boolean;
  /** 透传回 InitOptions 里传入的 nonce */
  nonce?: string;
}

/** 弹窗路径的库回调：成功给 id_token + 解出来的 user，失败给 error */
export interface TelegramOidcResult {
  id_token?: string;
  user?: TgUserData;
  error?: string;
}

/**
 * 跳转路径的回跳参数
 *
 * @remarks 回跳只带 code，**没有 id_token**。code_verifier 是发起跳转前存在
 * sessionStorage 里的，服务端换 token 时要用，所以一并返回。
 */
export interface TelegramOidcCodeResult {
  code: string;
  state: string;
  code_verifier?: string;
}

function base64Url(bytes: Uint8Array): string {
  let str = '';
  for (let i = 0; i < bytes.length; i += 1) {
    str += String.fromCharCode(bytes[i]);
  }
  return window.btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function randomString(bytes = 32): string {
  const arr = new Uint8Array(bytes);
  window.crypto.getRandomValues(arr);
  return base64Url(arr);
}

/**
 * 库用的弹窗窗口名，必须和官方 `telegram-login.js` 里 `openPopup` 的保持一致：
 * 我们先开同名窗口，库的 `window.open(authUrl, 同名)` 会复用它而不是另开一个。
 */
const POPUP_NAME = 'telegram_oidc_login';

/** 弹窗尺寸/位置照抄官方脚本；复用已存在的窗口时浏览器会忽略这些参数 */
function getPopupFeatures(): string {
  const width = 550;
  const height = 650;
  const screenAny = window.screen as Screen & { availLeft?: number; availTop?: number };
  const left = Math.max(0, (screenAny.width - width) / 2) + (screenAny.availLeft || 0);
  const top = Math.max(0, (screenAny.height - height) / 2) + (screenAny.availTop || 0);
  return `width=${width},height=${height},left=${left},top=${top},status=0,location=0,menubar=0,toolbar=0`;
}

/**
 * 自己先开一个同名空白窗口，当这次登录的弹窗本体
 *
 * @remarks
 * **不能**像以前那样另开一个探测窗口然后关掉：`window.open` 一旦成功就消费掉本次用户手势的
 * transient activation，紧接着库再 `window.open` 必被浏览器拦掉，而库对被拦的窗口既不回调也不
 * 报错（源码里 `if (TelegramLogin._popup)` 没有 else 分支），表现就是点了没反应、状态卡住。
 * 所以这个窗口开着不关，交给库复用；同一个任务里同步执行，中间不要 await。
 * @returns 返回 null 说明弹窗确实被拦了
 */
function openPopupWindow(): Window | null {
  if (isServer()) {
    return null;
  }
  try {
    return window.open('about:blank', POPUP_NAME, getPopupFeatures());
  } catch {
    return null;
  }
}

/** Telegram 可能把结果发过来的 origin：脚本源、授权页源、主域 */
function isTelegramOrigin(origin: string): boolean {
  return /^https:\/\/(oauth\.telegram\.org|oauth\.tg\.dev|telegram\.org)$/.test(origin);
}

/** 解 id_token（JWT）的 payload；只 base64 解、**不验签**，服务端该做的校验见 TgUserData 的 @remarks */
function decodeIdToken(idToken: string): TelegramOidcResult {
  try {
    const parts = idToken.split('.');
    if (parts.length !== 3) {
      return { error: 'malformed id_token' };
    }
    const raw = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const pad = raw.length % 4;
    const json = JSON.parse(window.atob(pad ? raw + new Array(5 - pad).join('=') : raw));
    return { id_token: idToken, user: json as TgUserData };
  } catch {
    return { error: 'malformed id_token' };
  }
}

/**
 * 自己从弹窗消息里解授权结果（比库的 `buildResult` 宽松）
 *
 * @remarks
 * 库只认 `event.origin === 脚本源`（`getScriptOrigin` 推导）且 `event.source === 它自己 open 的
 * 那个窗口` 的 `{ event: 'auth_result', result }`，两条校验任一不满足就**静默丢弃**（源码里只有
 * `if (...) return`，没有 else）。线上出现过"授权页正常、点了同意、回调就是不来"的情况，所以这里
 * 按"形状对就认"再解一遍：data 允许 JSON 字符串或对象，`result` 允许直接是 id_token，也兼容
 * `{ id_token }` / `{ error }`。调用方需先用 source/origin 确认这条消息确实来自本次弹窗。
 * @returns 不是授权结果的消息返回 null
 */
function parseAuthResult(data: unknown): TelegramOidcResult | null {
  let payload = data as any;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch {
      // 也可能是裸的 id_token 字符串
      return payload.split('.').length === 3 ? decodeIdToken(payload) : null;
    }
  }
  if (!payload || typeof payload !== 'object') {
    return null;
  }
  if (payload.error) {
    return { error: String(payload.error) };
  }
  if (payload.event && payload.event !== 'auth_result') {
    return null;
  }
  const token = typeof payload.result === 'string' ? payload.result : payload.id_token;
  if (typeof token !== 'string' || !token) {
    return null;
  }
  return decodeIdToken(token);
}

/** 生成 PKCE 对（文档推荐 S256）；crypto.subtle 只在安全上下文可用，拿不到就退化成不带 PKCE */
async function createPkcePair(): Promise<{ verifier: string; challenge?: string }> {
  const verifier = randomString();
  try {
    const digest = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
    return { verifier, challenge: base64Url(new Uint8Array(digest)) };
  } catch {
    return { verifier };
  }
}

export interface TelegramRedirectOptions {
  /** BotFather → Login Widget 里的 Client ID */
  clientId: number;
  /** 回跳地址，必须登记在 BotFather 的 Allowed URLs 里 */
  redirectUri: string;
  /** 申请的权限，openid 会自动补齐 */
  scope?: TelegramOidcScope[];
  /** 授权页 UI 语言，传 Telegram 的语言码（zh-hans / zh-hant），不是 app 的 locale */
  lang?: string;
  /** 服务端下发的一次性随机串。跳转路径必须带，否则回来的 id_token 没有 nonce claim，服务端校验过不了 */
  nonce?: string;
}

/**
 * 整页跳转到 Telegram OIDC 授权页（拿不到弹窗时的兜底）
 *
 * @remarks 文档规定的手动流程是 Authorization Code + PKCE：
 * `response_type=code`，回跳后服务端拿 code + code_verifier 去 /token 换 id_token。
 * PKCE verifier 与 state 存在 sessionStorage，回跳后由 getUrlParams 取回。
 * @returns 是否真的发起了跳转。参数不全时不跳，调用方需要自行解掉 loading。
 */
export async function toAuthorization(opts: TelegramRedirectOptions): Promise<boolean> {
  const { clientId, redirectUri, scope = DEFAULT_SCOPE, lang, nonce } = opts;
  if (!clientId || !redirectUri || isServer()) {
    return false;
  }
  const { verifier, challenge } = await createPkcePair();
  const state = randomString(16);
  window.sessionStorage.setItem(VERIFIER_KEY, verifier);
  window.sessionStorage.setItem(STATE_KEY, state);

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: String(clientId),
    redirect_uri: redirectUri,
    scope: normalizeScope(scope).join(' '),
    state
  });
  if (lang) {
    params.set('lang', lang);
  }
  if (nonce) {
    params.set('nonce', nonce);
  }
  if (challenge) {
    params.set('code_challenge', challenge);
    params.set('code_challenge_method', 'S256');
  }

  window.location.href = `${TG_OIDC.authorization}?${params}`;
  return true;
}

/**
 * 从回跳 URL 里取出 code / state（仅整页跳转路径需要）
 *
 * @remarks
 * 取完即清掉 URL 上的参数，并把 PKCE verifier 从 sessionStorage 取出后删除，
 * 避免刷新时重复消费。state 与发起时不一致说明可能被 CSRF 篡改，返回 null。
 */
function getUrlParams(): TelegramOidcCodeResult | null {
  if (isServer()) {
    return null;
  }
  try {
    const search = new URLSearchParams(window.location.search);
    const code = search.get('code');
    const state = search.get('state');
    if (!code || !state) {
      return null;
    }
    const expectState = window.sessionStorage.getItem(STATE_KEY);
    const codeVerifier = window.sessionStorage.getItem(VERIFIER_KEY) || undefined;
    window.sessionStorage.removeItem(STATE_KEY);
    window.sessionStorage.removeItem(VERIFIER_KEY);
    window.history.replaceState(null, '', window.location.pathname);
    if (!expectState || expectState !== state) {
      return null;
    }
    return { code, state, code_verifier: codeVerifier };
  } catch {
    return null;
  }
}

const TG_LANG = {
  'zh-CN': 'zh-hans',
  'zh-HK': 'zh-hant',
  'en-US': 'en',
  'ja-JP': 'ja',
  'ko-KR': 'ko',
  'de-DE': 'de',
  'ru-RU': 'ru',
  'fr-FR': 'fr',
  'ms-MY': 'ms',
  'pt-BR': 'pt-br'
} as const;

type LangKeyType = keyof typeof TG_LANG;

function getLang(key: LangKeyType) {
  return TG_LANG[key];
}

const _comp_props = {
  /** @BotFather → Login Widget 里的 Client ID，文档中等同于 bot id */
  clientId: { type: Number, required: true },
  /** 申请的权限，openid 自动补齐；默认只要 openid + profile */
  scope: {
    type: Array as PropType<TelegramOidcScope[]>,
    default: () => [...DEFAULT_SCOPE]
  },
  /** 授权页文案语言；传 app 的 locale（zh-CN 这种），组件内部转成 Telegram 语言码 */
  lang: { type: String as PropType<LangKeyType>, required: true },
  /** 服务端下发的一次性随机串，会写进 id_token 防重放，强烈建议传 */
  nonce: String,
  /** 回跳地址，必须登记在 BotFather 的 Allowed URLs 里 */
  redirectUri: { type: String, required: true },
  /** 拿不到弹窗（被拦 / 脚本加载失败）时是否走整页跳转兜底 */
  fallbackRedirect: { type: Boolean, default: true },
  /** 进页面就预加载脚本；开启后点击能走同步快路径，弹窗最稳（建议开） */
  defaultLoad: Boolean,
  onCallback: { type: Function as PropType<(res: TelegramOidcResult) => void> },
  /** reason 为库给的 error，如 `popup_closed` / `missing id_token` */
  onRejectCallback: { type: Function as PropType<(reason?: string) => void> }
};

type RawTelegramOidcProps = ExtractPropTypes<typeof _comp_props>;

export type TelegramOidcProps = Partial<RawTelegramOidcProps> &
  Required<Pick<RawTelegramOidcProps, 'clientId' | 'lang' | 'redirectUri'>>;

export type TelegramOidcExpose = {
  startCheck: () => Promise<void>;
  checking: boolean;
};

const Telegram = defineComponent<TelegramOidcProps>({
  name: 'TelegramOidc',
  getLang,
  toAuthorization,
  getUrlParams,
  props: _comp_props,
  slots: Object as SlotsType<{
    default: { startCheck: () => Promise<void>; checking: boolean };
  }>,
  setup(props, { slots, expose }) {
    const authConfig = computed(() => ({
      clientId: props.clientId || 0,
      redirectUri: props.redirectUri || '',
      lang: getLang(props.lang),
      scope: getScope(props.scope),
      nonce: props.nonce
    }));

    function getClientFn() {
      return (window as any)?.Telegram?.Login?.auth;
    }

    let scriptPromise: Promise<boolean> | null = null;

    function setupScript() {
      if (isServer()) {
        return Promise.resolve(false);
      }
      if (getClientFn()) {
        return Promise.resolve(true);
      }
      if (scriptPromise) {
        return scriptPromise;
      }
      scriptPromise = new Promise<boolean>((resolve) => {
        const script = document.createElement('script');
        script.async = true;
        script.src = SCRIPT_SRC;
        (document.head || document.body)?.appendChild(script);
        script.onload = () => {
          const loaded = !!getClientFn();
          if (!loaded) {
            scriptPromise = null;
          }
          resolve(loaded);
        };
        script.onerror = () => {
          script.remove();
          scriptPromise = null;
          resolve(false);
        };
      });
      return scriptPromise;
    }

    let inFlight = false;
    const checking = ref(false);
    let popupWin: Window | null = null;
    let popupTimer: ReturnType<typeof setInterval> | null = null;
    let closeGraceTimer: ReturnType<typeof setTimeout> | null = null;
    /** 关窗后仍等一等的时长：auth_result 与 close 几乎同时到，但不保证谁先 */
    const CLOSE_GRACE_MS = 1500;
    /** 本次弹窗期间收到的相关 message 摘要，仅用于失败时打日志定位 */
    let seenMessages: string[] = [];

    function stopPopupWatch() {
      if (popupTimer) {
        clearInterval(popupTimer);
        popupTimer = null;
      }
      if (closeGraceTimer) {
        clearTimeout(closeGraceTimer);
        closeGraceTimer = null;
      }
      popupWin = null;
    }

    function release() {
      inFlight = false;
      checking.value = false;
      stopPopupWatch();
    }

    /**
     * 我们自己的结果监听：库的校验（origin/source 两条）挡下来的消息，这里照收
     *
     * @remarks 只处理"来自本次弹窗（source 就是那个窗口）或来自 Telegram 域"的消息，
     * 其余一律不看，避免被同页面其它来源的 postMessage 干扰。
     */
    function onWindowMessage(e: MessageEvent) {
      if (!inFlight) {
        return;
      }
      const fromOurPopup = !!popupWin && e.source === popupWin;
      if (!fromOurPopup && !isTelegramOrigin(e.origin)) {
        return;
      }
      let preview = '';
      try {
        preview = typeof e.data === 'string' ? e.data : JSON.stringify(e.data);
      } catch {
        preview = '<unserializable>';
      }
      seenMessages.push(
        `origin=${e.origin} fromPopup=${fromOurPopup} data=${preview.slice(0, 80)}`
      );

      const res = parseAuthResult(e.data);

      if (res) {
        handleAuthResult(res);
      }
    }

    function watchPopup(win: Window) {
      popupWin = win;
      popupTimer = setInterval(() => {
        if (popupWin && !popupWin.closed) {
          return;
        }
        // 窗口没了：先停轮询（popupWin 留到 release，供宽限期内的 source 比对），再等宽限期
        if (popupTimer) {
          clearInterval(popupTimer);
          popupTimer = null;
        }
        closeGraceTimer = setTimeout(() => {
          closeGraceTimer = null;
          const needReport = inFlight;
          release();
          if (needReport) {
            console.warn(
              `[TelegramOidc] popup_closed：本次弹窗期间收到 ${seenMessages.length} 条相关 message`,
              seenMessages
            );
            props.onRejectCallback?.('popup_closed');
          }
        }, CLOSE_GRACE_MS);
      }, 300);
    }

    async function fallback(reason: string) {
      if (!props.fallbackRedirect) {
        release();
        props.onRejectCallback?.(reason);
        return;
      }
      const jumped = await toAuthorization(authConfig.value);

      if (!jumped) {
        release();
        props.onRejectCallback?.(reason);
      }
    }

    function getAuthOptions() {
      const _config = authConfig.value;
      const options: Record<string, unknown> = {
        client_id: _config.clientId,
        scope: normalizeScope(_config.scope)
      };
      if (_config.lang) {
        options.lang = _config.lang;
      }
      if (_config.nonce) {
        options.nonce = _config.nonce;
      }
      return options;
    }

    function handleAuthResult(res: TelegramOidcResult) {
      if (!inFlight) {
        return;
      }
      if (res?.error === 'popup_closed') {
        return;
      }
      release();
      if (res?.id_token && !res.error) {
        props.onCallback?.(res);
      } else {
        props.onRejectCallback?.(res?.error);
      }
    }

    async function startCheck() {
      if (isServer() || inFlight) {
        return;
      }
      inFlight = true;
      checking.value = true;
      seenMessages = [];

      if (!authConfig.value.clientId) {
        release();
        props.onRejectCallback?.('missing client_id');
        return;
      }

      if (!getClientFn()) {
        const loaded = await setupScript();
        if (!loaded) {
          await fallback('script_load_failed');
          return;
        }
      }

      const popup = openPopupWindow();
      if (!popup) {
        await fallback('popup_blocked');
        return;
      }

      watchPopup(popup);
      getClientFn()?.(getAuthOptions(), handleAuthResult);
    }

    onMounted(() => {
      if (props.defaultLoad) {
        setupScript();
      }
      window.addEventListener('pageshow', release);
      window.addEventListener('message', onWindowMessage);
    });

    onUnmounted(() => {
      stopPopupWatch();
      window.removeEventListener('pageshow', release);
      window.removeEventListener('message', onWindowMessage);
    });

    expose({ startCheck, checking });

    return () => <div>{slots.default?.({ startCheck, checking: checking.value })}</div>;
  }
});

type C = typeof Telegram & {
  readonly getLang: typeof getLang;
  readonly toAuthorization: typeof toAuthorization;
  readonly getUrlParams: typeof getUrlParams;
};

/** Telegram（OIDC）身份检查 */
export const TelegramOidc = withInstall<C>(Telegram as C) as unknown as C &
  Plugin & { new (...args: any[]): InstanceType<C> & TelegramOidcExpose };

export default TelegramOidc;

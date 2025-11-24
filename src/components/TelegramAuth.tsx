import { defineComponent, onMounted, computed } from 'vue';
import type { SlotsType, PropType, ExtractPropTypes } from 'vue';
import { getWebsiteUrl, isInMobileBrowser, withInstall } from '~/utils';

/** 跳转Telegram身份检查 */
export function toTelegramAuth(botId: number, toPath: string) {
  if (!botId || !toPath) return;
  const httpUrl = encodeURIComponent(getWebsiteUrl());
  const routerUrl = encodeURIComponent(toPath);
  const url = `https://oauth.telegram.org/auth?bot_id=${botId}&origin=${httpUrl}&embed=1&request_access=write&return_to=${httpUrl}${routerUrl}`;
  window.location.href = url;
}

/** 获取路由中的Telegram身份检查回调参数 */
export function getTelegramAuthUrlParams(): TgUserData | null {
  const re = /[#\?\&]tgAuthResult=([A-Za-z0-9\-_=]*)$/;
  try {
    const locationHash = window.location.hash.toString();
    const match = locationHash.match(re);
    if (!match) {
      return null;
    }
    window.location.hash = locationHash.replace(re, '');
    let data = match[1].replace(/-/g, '+').replace(/_/g, '/');
    const pad = data.length % 4;
    if (pad > 1) data += new Array(5 - pad).join('=');
    return data ? JSON.parse(window.atob(data)) : null;
  } catch {
    return null;
  }
}

/** tg用户信息 */
export interface TgUserData {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  photo_url: string;
  username: string;
}

type GetPopupContainerFn = () => HTMLElement | Element;

const _comp_props = {
  botId: Number,
  toPath: String,
  defaultLoad: Boolean,
  getPopupContainer: { type: Function as PropType<GetPopupContainerFn> },
  onCallback: { type: Function as PropType<(user: TgUserData) => void> },
  onRejectCallback: { type: Function as PropType<() => void> }
};

export type TelegramAuthProps = Partial<ExtractPropTypes<typeof _comp_props>>;

const Telegram = defineComponent<TelegramAuthProps>({
  name: 'TelegramAuth',
  toTelegramAuth,
  getTelegramAuthUrlParams,
  props: _comp_props,
  slots: Object as SlotsType<{
    default: { startCheck: () => void };
  }>,
  setup(props, { slots, expose }) {
    const getConfigRef = computed(() => ({
      id: props.botId,
      path: props.toPath
    }));

    function getClientFn() {
      return (window as any)?.Telegram?.Login?.auth;
    }

    function getSetupEl() {
      const _el = props.getPopupContainer?.();
      return _el || document.body;
    }

    function setupScript() {
      return new Promise<boolean>((resolve) => {
        if (!document) {
          resolve(false);
          return;
        }
        if (isInMobileBrowser() || getClientFn()) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.src = 'https://telegram.org/js/telegram-widget.js';
        getSetupEl()?.appendChild?.(script);
        script.onload = () => {
          resolve(!!getClientFn());
        };
        script.onerror = () => {
          script.remove();
          resolve(false);
        };
      });
    }

    async function startCheck() {
      const { id, path } = getConfigRef.value;
      if (!isInMobileBrowser()) {
        const bool = await setupScript();
        if (!bool) {
          toTelegramAuth(id || 0, path || '');
          return;
        }
      }

      if (isInMobileBrowser() || !getClientFn()) {
        toTelegramAuth(id || 0, path || '');
        return;
      }
      getClientFn()?.(
        { bot_id: id, request_access: true },
        (data: TgUserData) => {
          if (data) {
            props.onCallback?.(data);
          } else {
            props.onRejectCallback?.();
          }
        }
      );
    }

    onMounted(() => {
      if (props.defaultLoad) {
        setupScript();
      }
    });

    expose({ startCheck });

    return () => <div>{slots.default?.({ startCheck })}</div>;
  }
});

type C = typeof Telegram & {
  readonly toTelegramAuth: typeof toTelegramAuth;
  readonly getTelegramAuthUrlParams: typeof getTelegramAuthUrlParams;
};

/** Telegram身份检查 */
export const TelegramAuth = withInstall<C>(Telegram as C);

export default TelegramAuth;

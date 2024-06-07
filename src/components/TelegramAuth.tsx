import { defineComponent, onMounted, ref, type SlotsType } from 'vue';
import { propTypes } from '@/utils/vuePropTypes';
import {
  getWebsiteUrl,
  isInMobileBrowser,
  isEdgeBrowser,
  withInstall
} from '@/utils';

/** tg用户信息 */
export type TgUserData = {
  auth_date: number;
  first_name: string;
  hash: string;
  id: number;
  last_name: string;
  photo_url: string;
  username: string;
};

/** 跳转Telegram身份检查 */
export function toTelegramAuth(botId: number, toPath: string) {
  if (!botId || !toPath) return;
  const httpUrl = encodeURIComponent(getWebsiteUrl());
  const routerUrl = encodeURIComponent(toPath);
  const url = `https://oauth.telegram.org/auth?bot_id=${botId}&origin=${httpUrl}&embed=1&request_access=write&return_to=${httpUrl}${routerUrl}`;
  if (isEdgeBrowser()) {
    window.open(url, '_self');
  } else {
    window.location.href = url;
  }
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

const Telegram = defineComponent({
  name: 'TelegramAuth',
  toTelegramAuth,
  getTelegramAuthUrlParams,
  props: {
    botId: propTypes.number,
    toPath: propTypes.string
  },
  emits: {
    callback: (_user: TgUserData) => true || _user,
    rejectCallback: () => true
  },
  slots: Object as SlotsType<{
    default: { startCheck: () => void };
  }>,
  setup(props, { emit, slots, expose }) {
    const telegramAuthDomRef = ref<HTMLElement | null>(null);

    const getClientFn = () => (window as any)?.Telegram?.Login?.auth;

    function startCheck() {
      const { botId, toPath } = props;
      if (!botId) return;
      const clientFn = getClientFn();
      if (isInMobileBrowser() || !clientFn) {
        toTelegramAuth(botId, toPath);
        return;
      }
      clientFn?.(
        { bot_id: botId, request_access: true },
        (data: TgUserData) => {
          if (data) {
            emit('callback', data);
          } else {
            emit('rejectCallback');
          }
        }
      );
    }

    function setupScript() {
      if (!window?.document || getClientFn() || isInMobileBrowser()) return;
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://telegram.org/js/telegram-widget.js';
      telegramAuthDomRef.value?.appendChild(script);
    }

    onMounted(setupScript);

    expose({ startCheck });

    return () => (
      <div ref={telegramAuthDomRef}>{slots.default?.({ startCheck })}</div>
    );
  }
});

type C = typeof Telegram & {
  readonly toTelegramAuth: typeof toTelegramAuth;
  readonly getTelegramAuthUrlParams: typeof getTelegramAuthUrlParams;
};

/** Telegram身份检查 */
export const TelegramAuth = withInstall<C>(Telegram as C);

export default TelegramAuth;

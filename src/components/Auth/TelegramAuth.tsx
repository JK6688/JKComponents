import { defineComponent, onMounted, ref } from 'vue';
import { propTypes } from '@/utils/vuePropTypes';
import { getWebsiteUrl, isInMobileBrowser, isEdgeBrowser, withInstall } from '@/utils';

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
  isEdgeBrowser() ? window.open(url, '_self') : (window.location.href = url);
}

/** 获取路由中的Telegram身份检查回调参数 */
export function getTelegramAuthUrlParams() {
  let locationHash = '';
  const re = /[#\?\&]tgAuthResult=([A-Za-z0-9\-_=]*)$/;
  let match: string[] | null = null;
  try {
    locationHash = window.location.hash.toString();
    if ((match = locationHash.match(re))) {
      window.location.hash = locationHash.replace(re, '');
      let data = match ? match[1] : '';
      data = data.replace(/-/g, '+').replace(/_/g, '/');
      const pad = data.length % 4;
      if (pad > 1) data += new Array(5 - pad).join('=');
      return data ? JSON.parse(window.atob(data)) : false;
    }
  } catch {
    return false;
  }
  return false;
}

const Telegram = defineComponent({
  name: 'TelegramAuth',
  toTelegramAuth,
  getTelegramAuthUrlParams,
  props: {
    botId: propTypes.number,
    toPath: propTypes.string,
  },
  emits: {
    callback: (_user: TgUserData) => true,
    rejectCallback: () => true,
  },
  setup(props, { emit, slots }) {
    const telegramAuthDomRef = ref<HTMLElement | null>(null);

    const getClientFn = () => (window as any)?.Telegram?.Login?.auth;

    function setupScript() {
      if (!window?.document || getClientFn() || isInMobileBrowser()) return;
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://telegram.org/js/telegram-widget.js';
      telegramAuthDomRef.value?.appendChild?.(script);
    }

    function startCheck() {
      const { botId, toPath } = props;
      if (!botId) return;
      const clientFn = getClientFn();
      if (isInMobileBrowser() || !clientFn) {
        toTelegramAuth(botId, toPath);
        return;
      }
      clientFn?.({ bot_id: botId, request_access: true }, (data: TgUserData) => {
        data ? emit('callback', data) : emit('rejectCallback');
      });
    }

    onMounted(setupScript);

    const renderFn = () => <div ref="telegramAuthDomRef">{slots?.default?.({ startCheck })}</div>;

    return { telegramAuthDomRef, renderFn, startCheck };
  },
  render: (self: { renderFn: () => JSX.Element }) => self.renderFn(),
});

/** Telegram身份检查 */
export const TelegramAuth = withInstall(Telegram);

export default TelegramAuth as typeof TelegramAuth & {
  readonly toTelegramAuth: typeof toTelegramAuth;
  readonly getTelegramAuthUrlParams: typeof getTelegramAuthUrlParams;
};

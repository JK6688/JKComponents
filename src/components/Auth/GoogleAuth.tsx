import { defineComponent, onMounted, ref, type SlotsType } from 'vue';
import { propTypes } from '@/utils/vuePropTypes';
import { isInMobileBrowser, isEdgeBrowser } from '@/utils/is';
import { withInstall } from '@/utils/withInstall';

/** 跳转谷歌身份检查 */
export function toGoogleAuth(clientId: string, redirectUri: string) {
  if (!clientId || !redirectUri) return;
  const routerUrl = encodeURIComponent(redirectUri);
  const scope = encodeURIComponent('email profile');
  const client_id = encodeURIComponent(clientId);
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${routerUrl}&scope=${scope}&client_id=${client_id}`;
  isEdgeBrowser() ? window.open(url, '_self') : (window.location.href = url);
}

const Google = defineComponent({
  name: 'GoogleAuth',
  toGoogleAuth,
  props: {
    clientId: propTypes.string,
    redirectUri: propTypes.string,
  },
  emits: {
    callback: (_data: { code: string }) => true,
    rejectCallback: (_data: any) => true,
  },
  slots: Object as SlotsType<{
    default: { startCheck: () => void };
  }>,
  setup(props, { emit, slots, expose }) {
    const googleAuthDomRef = ref<HTMLElement | null>(null);

    const isHidden = ref(true);

    const getClientFn = () => (window as any)?.google?.accounts?.oauth2?.initCodeClient;

    function startCheck() {
      getClientFn()?.({
        client_id: props.clientId,
        scope: 'email profile',
        redirect_uri: props.redirectUri,
        ux_mode: isInMobileBrowser() ? 'redirect' : 'popup',
        callback(data: any) {
          data.error ? emit('rejectCallback', data) : emit('callback', data);
        },
      })?.requestCode?.();
    }

    expose({ startCheck });

    function setupScript() {
      if (!window?.document || getClientFn()) {
        if (getClientFn()) isHidden.value = false;
        return;
      }
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://accounts.google.com/gsi/client';
      googleAuthDomRef.value?.appendChild?.(script);
      script.onload = () => {
        if (getClientFn()) isHidden.value = false;
      };
    }

    onMounted(setupScript);

    return () => (
      <div ref={googleAuthDomRef}>{!isHidden.value && slots?.default?.({ startCheck })}</div>
    );
  },
});

type C = typeof Google & { readonly toGoogleAuth: typeof toGoogleAuth };

/** 谷歌身份检查 */
export const GoogleAuth = withInstall<C>(Google as C);

export default GoogleAuth;

import { defineComponent, computed, onMounted } from 'vue';
import type { SlotsType, PropType, ExtractPropTypes } from 'vue';
import { isInMobileBrowser, withInstall } from '~/utils';

/** 跳转谷歌身份检查 */
export function toGoogleAuth(clientId: string, redirectUri: string) {
  if (!clientId || !redirectUri) return;
  const uri = encodeURIComponent(redirectUri);
  const scope = encodeURIComponent('email profile');
  const _clientId = encodeURIComponent(clientId);
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${uri}&scope=${scope}&client_id=${_clientId}`;
  window.location.href = url;
}

type GetPopupContainerFn = () => HTMLElement | Element;

const _comp_props = {
  clientId: String,
  redirectUri: String,
  defaultLoad: Boolean,
  getPopupContainer: { type: Function as PropType<GetPopupContainerFn> },
  onCallback: { type: Function as PropType<(data: { code: string }) => void> },
  onRejectCallback: { type: Function as PropType<(error: any) => void> }
};

export type GoogleAuthProps = Partial<ExtractPropTypes<typeof _comp_props>>;

const Google = defineComponent<GoogleAuthProps>({
  name: 'GoogleAuth',
  toGoogleAuth,
  props: _comp_props,
  slots: Object as SlotsType<{
    default: { startCheck: () => void };
  }>,
  setup(props, { slots, expose }) {
    const getConfigRef = computed(() => ({
      id: props.clientId,
      uri: props.redirectUri
    }));

    function getClientFn() {
      return (window as any)?.google?.accounts?.oauth2?.initCodeClient;
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
        script.src = 'https://accounts.google.com/gsi/client';
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
      const { id, uri } = getConfigRef.value;
      if (!isInMobileBrowser()) {
        const bool = await setupScript();
        if (!bool) {
          toGoogleAuth(id || '', uri || '');
          return;
        }
      }

      if (isInMobileBrowser() || !getClientFn()) {
        toGoogleAuth(id || '', uri || '');
        return;
      }

      getClientFn()?.({
        client_id: id,
        scope: 'email profile',
        redirect_uri: uri,
        ux_mode: isInMobileBrowser() ? 'redirect' : 'popup',
        callback(data: any) {
          if (data?.error) {
            props.onRejectCallback?.(data.error);
          } else {
            props.onCallback?.(data);
          }
        }
      })?.requestCode?.();
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

type C = typeof Google & { readonly toGoogleAuth: typeof toGoogleAuth };

/** 谷歌身份检查 */
export const GoogleAuth = withInstall<C>(Google as C);

export default GoogleAuth;

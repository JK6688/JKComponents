import { defineComponent, onMounted, onUnmounted, ref, unref, useId, watch, computed } from 'vue';
import type { PropType, ExtractPropTypes, Plugin } from 'vue';
import { isServer, withInstall } from '~/utils';

const TURNSTILE_LANG_MAP: Record<string, string> = {
  'zh-cn': 'zh-cn',
  'zh-hk': 'zh-tw',
  'en-us': 'en-us',
  'ja-jp': 'ja-jp',
  'ko-kr': 'ko-kr',
  'de-de': 'de-de',
  'ru-ru': 'ru-ru',
  'fr-fr': 'fr-fr',
  'ms-my': 'ms-my',
  'pt-br': 'pt-br',
  'ur-pk': 'en-us',
};

type TurnstileAPI = {
  ready: (callback: () => void) => void;
  render: (container: string, options: Record<string, any>) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

let turnstileLoadPromise: Promise<TurnstileAPI> | null = null;

function getTurnstile(): TurnstileAPI | null {
  return (window as any)?.turnstile || null;
}

function loadScript(): Promise<TurnstileAPI> {
  if (isServer()) {
    return Promise.reject(new Error('Turnstile can only be loaded in the browser.'));
  }

  const obj = getTurnstile();
  if (obj) {
    return Promise.resolve(obj);
  }

  if (turnstileLoadPromise) {
    return turnstileLoadPromise;
  }

  turnstileLoadPromise = new Promise<TurnstileAPI>((resolve, reject) => {
    const script = document.createElement('script');

    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

    script.onload = () => {
      const obj2 = getTurnstile();
      if (obj2) {
        resolve(obj2);
      } else {
        turnstileLoadPromise = null;
        script.remove();
        reject(new Error('Turnstile API failed to initialize.'));
      }
    };

    script.onerror = () => {
      turnstileLoadPromise = null;
      script.remove();

      reject(new Error('Failed to load Cloudflare Turnstile script.'));
    };

    document.head.appendChild(script);
  });

  return turnstileLoadPromise;
}

function toLang(locale: string) {
  const lc = unref(locale).toLowerCase();
  return (TURNSTILE_LANG_MAP[lc] ?? lc) || 'en-us';
}

const _comp_props = {
  value: { type: String, required: true },
  'onUpdate:value': { type: Function as PropType<(token: string) => void> },
  onChange: { type: Function as PropType<(token: string) => void> },
  sitekey: { type: String, required: true },
  rootClass: { type: String },
  theme: { type: String as PropType<'light' | 'dark'>, required: true },
  lang: { type: String, required: true },
};

type RawTurnstileProps = ExtractPropTypes<typeof _comp_props>;

export type TurnstileProps = Partial<RawTurnstileProps> &
  Required<Pick<RawTurnstileProps, 'value' | 'sitekey' | 'theme' | 'lang'>>;

export type TurnstileExpose = {
  reset: () => void;
  destroy: () => void;
};

const CF = defineComponent<TurnstileProps>({
  name: 'Turnstile',
  props: _comp_props,
  loadScript,
  toLang,
  getTurnstile,
  emits: { 'update:value': (_token: string) => true },
  setup(props, { emit, expose }) {
    const DOM_ID = `turnstile-container-${useId()}`;

    const getIsDarkRef = computed(() => props.theme === 'dark');

    const widgetIdRef = ref('');

    let isMounted = false;
    let renderVersion = 0;

    function setValue(token?: string) {
      const value = token ?? '';
      props.onChange?.(value);
      emit('update:value', value);
    }

    function reset() {
      setValue();
      if (widgetIdRef.value) {
        getTurnstile()?.reset?.(widgetIdRef.value);
      }
    }

    function destroyTurnstile() {
      renderVersion++;
      if (!widgetIdRef.value) {
        return;
      }
      getTurnstile()?.remove?.(widgetIdRef.value);
      widgetIdRef.value = '';
    }

    function renderTurnstile() {
      const turnstile = getTurnstile();
      if (!turnstile || !props.sitekey) {
        return '';
      }
      return (
        turnstile?.render?.(`#${DOM_ID}`, {
          sitekey: props.sitekey,
          size: 'flexible',
          theme: getIsDarkRef.value ? 'dark' : 'light',
          language: toLang(props.lang || 'en-us'),
          retry: 'auto',
          'refresh-expired': 'auto',
          'refresh-timeout': 'auto',
          'retry-interval': 28000,
          callback: setValue,
          'error-callback': () => setValue(),
          'expired-callback': () => setValue(),
          'unsupported-callback': () => setValue(),
          'timeout-callback': reset,
        }) || ''
      );
    }

    async function initTurnstile() {
      const currentVersion = ++renderVersion;

      try {
        await loadScript();

        if (!isMounted || currentVersion !== renderVersion) {
          return;
        }

        if (widgetIdRef.value) {
          return;
        }

        widgetIdRef.value = renderTurnstile();
      } catch (error) {
        if (isMounted && currentVersion === renderVersion) {
          console.error('[Turnstile] Initialization failed:', error);
        }
      }
    }

    onMounted(() => {
      isMounted = true;
      initTurnstile();
    });

    watch(
      getIsDarkRef,
      () => {
        if (!isMounted || !widgetIdRef.value) {
          return;
        }
        destroyTurnstile();
        setValue();
        initTurnstile();
      },
      { flush: 'post' }
    );

    onUnmounted(() => {
      isMounted = false;
      destroyTurnstile();
    });

    expose({ reset, destroy: destroyTurnstile });

    return () => <div id={DOM_ID} class={props.rootClass || ''} />;
  },
});

type C = typeof CF & {
  readonly loadScript: typeof loadScript;
  readonly toLang: typeof toLang;
  readonly getTurnstile: typeof getTurnstile;
};

export const Turnstile = withInstall<C>(CF as C) as unknown as C &
  Plugin & { new(...args: any[]): InstanceType<C> & TurnstileExpose };

export default Turnstile;

// import { defineComponent, createApp } from 'vue';

import * as Comps from './components';
import * as Hooks from './hooks';
import * as Utils from './utils';

export * from './components';
export * from './hooks';
export * from './utils';

const JKVUEComps = { ...Comps, ...Hooks, ...Utils, Comps, Hooks, Utils };

export default JKVUEComps;

// createApp(defineComponent(() => () => <comps.GoogleAuth>App.tsx</comps.GoogleAuth>)).mount('#app');

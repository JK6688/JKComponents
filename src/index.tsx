// import { defineComponent, createApp } from 'vue';

import * as Comps from './components';
import * as Utils from './utils';

export * from './components';
export * from './utils';

const JKVUEComps = { ...Comps, ...Utils, Utils, Comps };

export default JKVUEComps;

// createApp(defineComponent(() => () => <comps.GoogleAuth>App.tsx</comps.GoogleAuth>)).mount('#app');

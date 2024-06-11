// import { defineComponent, createApp } from 'vue';

import * as comps from './components';
import * as utils from './utils';

export * from './components';
export * from './utils';

const JKVUEComps = { ...comps, ...utils, Utils: utils, Comps: comps };

export default JKVUEComps;

// createApp(defineComponent(() => () => <comps.GoogleAuth>App.tsx</comps.GoogleAuth>)).mount('#app');

import { defineComponent, createApp } from 'vue';

import * as components from './components';
import * as utils from './utils';

export * from './components';
export * from './utils';

const JKVUEComps = { ...components, ...utils };

export default JKVUEComps;

createApp(defineComponent(() => () => <div>App.tsx</div>)).mount('#app');

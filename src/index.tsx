import { defineComponent, createApp } from 'vue';

import * as components from './components';
import * as utils from './utils';

export * from './components';
export * from './utils';

const JKComponent = { ...components, ...utils };

export default JKComponent;

createApp(defineComponent(() => () => <div>App.tsx</div>)).mount('#app');

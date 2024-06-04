import * as components from './components';
import * as utils from './utils';

export * from './components';
export * from './utils';

const JKVUEComps = { ...components, ...utils, utils, components };

export default JKVUEComps;

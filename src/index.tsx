import * as comps from './components';
import * as utils from './utils';

export * from './components';
export * from './utils';

const JKVUEComps = { ...comps, ...utils, Utils: utils.Utils, Comps: comps };

export default JKVUEComps;

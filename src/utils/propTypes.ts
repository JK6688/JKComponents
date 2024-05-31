import type { CSSProperties, VNode, VNodeChild } from 'vue';
import * as VueTypes from 'vue-types';

const {
  any: genericType,
  string: stringType,
  bool: boolType,
  number: numberType,
  func: funcType,
} = VueTypes;

declare type VueNode = VNodeChild | VNode;

type PropTypes = VueTypes.VueTypesInterface & {
  readonly style: VueTypes.VueTypeValidableDef<CSSProperties>;
  readonly VNodeChild: VueTypes.VueTypeValidableDef<VueNode>;
};

const propTypes = VueTypes.createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes;

propTypes.extend([
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true,
    type: undefined,
  },
]);

const customPropsTypes = {
  genericType,
  stringType,
  boolType,
  numberType,
  funcType,
};

export { propTypes, genericType, stringType, boolType, numberType, funcType, customPropsTypes };

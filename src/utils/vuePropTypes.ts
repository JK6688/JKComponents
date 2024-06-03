import type { CSSProperties, VNode, VNodeChild } from 'vue';
import * as VueTypes from 'vue-types';

const { createTypes, toValidableType } = VueTypes;

const defVal = void 0;

const createParams = {
  func: defVal,
  bool: defVal,
  string: defVal,
  number: defVal,
  object: defVal,
  integer: defVal,
};

class VuePropTypes extends createTypes(createParams) {
  static vueTypes = VueTypes;
  static anyType = VueTypes.any;
  static stringType = VueTypes.string;
  static boolType = VueTypes.bool;
  static numberType = VueTypes.number;
  static funcType = VueTypes.func;

  static get style() {
    return toValidableType<CSSProperties | string>('style', {
      type: [String, Object],
      default: defVal,
    });
  }

  static get vueNode() {
    return toValidableType<VNode | VNodeChild>('vueNode', { default: defVal });
  }
}

export const propTypes = VuePropTypes;

export default VuePropTypes;

import type { CSSProperties, VNode, VNodeChild } from 'vue';
import * as VueTypes from 'vue-types';

const { createTypes, toValidableType } = VueTypes;

const defVal = undefined;

class VuePropTypes extends createTypes({
  func: defVal,
  bool: defVal,
  string: defVal,
  number: defVal,
  object: defVal,
  integer: defVal
}) {
  static vueTypes = VueTypes;

  static anyType = VueTypes.any;

  static stringType = VueTypes.string;

  static boolType = VueTypes.bool;

  static numberType = VueTypes.number;

  static funcType = VueTypes.func;

  static get style() {
    return toValidableType<CSSProperties>('style', {
      type: [Object],
      default: defVal
    });
  }

  static get vueNode() {
    return toValidableType<VNode | VNodeChild>('vueNode', { default: defVal });
  }
}

/** vue-types类型工具 */
export const propTypes = VuePropTypes;

export default VuePropTypes;

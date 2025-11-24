import type { CSSProperties, VNode, VNodeChild } from 'vue';
import type { VueTypeValidableDef } from 'vue-types';
import * as VueTypes from 'vue-types';

const defVal = void 0;

class VuePropTypes extends (VueTypes.createTypes({
  func: defVal,
  bool: defVal,
  string: defVal,
  number: defVal,
  object: defVal,
  integer: defVal
}) as ReturnType<typeof VueTypes.createTypes>) {
  static vueTypes = VueTypes;

  static anyType: typeof VueTypes.any = VueTypes.any;

  static stringType: typeof VueTypes.string = VueTypes.string;

  static boolType: typeof VueTypes.bool = VueTypes.bool;

  static numberType: typeof VueTypes.number = VueTypes.number;

  static funcType: typeof VueTypes.func = VueTypes.func;

  static get style(): VueTypeValidableDef<CSSProperties> {
    return VueTypes.toValidableType<CSSProperties>('style', {
      type: [Object],
      default: defVal
    });
  }

  static get vueNode(): VueTypeValidableDef<VNode | VNodeChild> {
    return VueTypes.toValidableType<VNode | VNodeChild>('vueNode', {
      default: defVal
    });
  }
}

/** vue-types类型工具 */
export const propTypes = VuePropTypes;

export default VuePropTypes;

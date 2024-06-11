import { isFunction } from '@/utils/is';
import type { Ref, ComputedRef } from 'vue';

export function useFormKeypressEnter<
  T extends (...args: any[]) => any,
  L extends Ref<boolean> | ComputedRef<boolean> | (() => boolean)
>(fn: T, loading: L) {
  return function (...args: any[]) {
    const isLoad = isFunction(loading) ? loading?.() : loading.value;
    if (!isLoad) {
      return fn?.(...args);
    }
  };
}

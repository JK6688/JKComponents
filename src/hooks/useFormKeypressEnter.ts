import { isFunction } from '@/utils/is';
import type { Ref, ComputedRef } from 'vue';

export function useFormKeypressEnter(
  fn: (...args: any[]) => any,
  loading: Ref<boolean> | ComputedRef<boolean> | (() => boolean)
) {
  return function (...args: any[]) {
    const isLoad = isFunction(loading) ? loading?.() : loading.value;
    if (!isLoad) {
      return fn?.(...args);
    }
  };
}

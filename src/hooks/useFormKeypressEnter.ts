import { isFunction } from '@/utils/is';
import { unref, type WatchSource } from 'vue';

export function useFormKeypressEnter<
  T extends (...args: any[]) => any,
  L extends WatchSource<boolean>
>(fn: T, loading: L) {
  return function (...args: any[]) {
    const isLoad = isFunction(loading) ? loading() : unref(loading);
    if (!isLoad) {
      return fn?.(...args);
    }
  };
}

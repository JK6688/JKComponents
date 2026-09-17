import { ref, watch, type Ref, type WatchSource } from 'vue';

export function useMemo<T>(
  getValue: () => T,
  condition: (WatchSource<unknown> | object)[],
  shouldUpdate?: (prev: any[], next: any[]) => boolean
) {
  const cacheRef: Ref<T> = ref(getValue() as any);

  watch(condition, (next, pre) => {
    if (shouldUpdate && !shouldUpdate(pre, next)) {
      return;
    }
    cacheRef.value = getValue();
  });

  return cacheRef;
}

import { ref, watch } from 'vue';
import { isDef } from '~/utils/is';

export function useCopyToClipboard(initial?: string) {
  const clipboardRef = ref(initial || '');
  const isSuccessRef = ref(false);
  const copiedRef = ref(false);

  // 不要用 flush: 'sync'：写剪贴板是同步阻塞操作，跟着输入逐字符触发会卡住输入框
  watch(
    clipboardRef,
    (str?: string) => {
      if (!isDef(str) || str === '') {
        isSuccessRef.value = false;
        copiedRef.value = false;
        return;
      }
      try {
        isSuccessRef.value = copyTextToClipboard(str);
        copiedRef.value = true;
      } catch (error) {
        isSuccessRef.value = false;
        copiedRef.value = false;
        console.error('Copy failed:', error);
      }
    },
    { immediate: !!initial }
  );

  return { clipboardRef, isSuccessRef, copiedRef };
}

export function copyTextToClipboard(
  input: string,
  {
    target
  }: {
    target?: HTMLElement;
  } = {}
) {
  // 服务端渲染没有 document，直接返回失败而不是抛错
  // 注意：默认值不能写成 `target = document.body`，参数默认值会在进入函数体前求值，守卫拦不住
  if (typeof document === 'undefined') {
    return false;
  }
  const container = target ?? document.body;

  const element = document.createElement('textarea');
  const previouslyFocusedElement = document.activeElement;

  element.value = input;
  element.setAttribute('readonly', '');

  Object.assign(element.style, {
    contain: 'strict',
    position: 'absolute',
    left: '-9999px',
    fontSize: '12pt'
  });

  const selection = document.getSelection();

  const originalRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  container.append(element);
  element.select();

  element.selectionStart = 0;
  element.selectionEnd = input.length;

  try {
    return document.execCommand('copy');
  } catch (e: unknown) {
    throw new Error('Unable to copy text to clipboard', { cause: e });
  } finally {
    element.remove();

    if (originalRange && selection) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }

    if (previouslyFocusedElement && (previouslyFocusedElement as HTMLElement).focus) {
      (previouslyFocusedElement as HTMLElement).focus();
    }
  }
}

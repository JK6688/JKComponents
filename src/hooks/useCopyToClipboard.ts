import { ref, watch } from 'vue';
import { isDef } from '~/utils/is';

export function useCopyToClipboard(initial?: string) {
  const clipboardRef = ref(initial || '');
  const isSuccessRef = ref(false);
  const copiedRef = ref(false);

  watch(
    clipboardRef,
    (str?: string) => {
      if (isDef(str) && str !== '') {
        try {
          isSuccessRef.value = copyTextToClipboard(str);
          copiedRef.value = true;
        } catch (error) {
          isSuccessRef.value = false;
          copiedRef.value = false;
          console.error('Copy failed:', error);
        }
      }
    },
    { immediate: !!initial, flush: 'sync' }
  );

  return { clipboardRef, isSuccessRef, copiedRef };
}

export function copyTextToClipboard(
  input: string,
  {
    target = document.body
  }: {
    target?: HTMLElement;
  } = {}
) {
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

  const originalRange =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  target.append(element);
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

    if (
      previouslyFocusedElement &&
      (previouslyFocusedElement as HTMLElement).focus
    ) {
      (previouslyFocusedElement as HTMLElement).focus();
    }
  }
}

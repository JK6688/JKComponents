import { createVNode, nextTick } from 'vue';
import { isHtmlStr, isString } from './is';

export * from './is';
export * from './vuePropTypes';
export * from './timeZone';
export * from './withInstall';

export function evalPro(str: string) {
  try {
    return Function(`'use strict'; return (${str});`)();
  } catch {
    return null;
  }
}

export function filterInputNum(
  e: string | number,
  type: 'int' | 'float' = 'float',
  maxDecimal = 6,
) {
  let val = String(e);
  val = val.replace(/(^\s*)|(\s*$)/g, '');
  if (val !== '') {
    const cases = val.indexOf('0') === 0 && val.length > 1 && val.indexOf('.') !== 1;
    const reg = type === 'int' ? /[^\d]/g : /[^\d.]/g;
    val = val.replace(reg, '');
    if (cases) {
      return '0';
    }
    if (type === 'int') {
      val = val.indexOf('0') === 0 && val.length > 1 ? val.substring(0, val.length - 1) : val;
    } else {
      const req1 = evalPro('/' + '\\.{' + maxDecimal + ',}/g');
      const req2 = evalPro('/^(' + '\\d?)+(' + '\\.' + '\\d{0,' + maxDecimal + '})?$/');
      if (val.indexOf('.') === 0) {
        val = '';
        val = val.replace(/[^$#$]/g, '0.');
        val = val.replace(req1, '.');
      } else if (!req2.test(val)) {
        val = val.substring(0, val.length - 1);
      }
    }
  }
  return val;
}

/** 生成输入数字过滤函数 */
export function generateHandleInputFn<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  fn?: () => void,
  type: 'float' | 'int' = 'int',
  maxDecimal = 6,
) {
  return (e: ChangeEvent) => {
    nextTick().then(() => {
      obj[key] = filterInputNum(e?.target?.value, type, maxDecimal) as T[K];
      fn?.();
    });
  };
}

/** 渲染Html字符串片段 */
export function renderHtmlStr(html: string) {
  if (!isString(html) || !isHtmlStr(html)) return html;
  return createVNode('div', { innerHTML: html });
}

export function getWebsiteUrl() {
  if (!window) return '';
  return `${window.location.protocol}//${window.location.hostname}`;
}

export function getRouterParams() {
  const params = new URLSearchParams(window.location.search);
  if (!params.size) return;
  const result: Recordable = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

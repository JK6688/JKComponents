import { createVNode, nextTick } from 'vue';
import * as is from './is';
import * as JKMath from './math';
import { sanitizeHtml } from './sanitizeHtml';

export * from './is';
export * from './math';
export * from './vuePropTypes';
export * from './timeZone';
export * from './withInstall';
export * from './sanitizeHtml';

/** 代替eval方法 */
export function evalPro(str: string) {
  try {
    const func = new Function(`'use strict'; return (${str});`);
    return func();
  } catch {
    return null;
  }
}

/** 数字输入过滤
 * @param eventVal 输入的值
 * @param type 输入类型，int整数，float，default: 'int'
 * @param maxDecimal 最大小数位，default: 6
 */
export function filterInputNum(
  eventVal: string | number,
  type: 'int' | 'float' = 'float',
  maxDecimal = 6
) {
  const isInt = type === 'int';

  let val = String(eventVal).trim();
  val = val.replace(/(^\s*)|(\s*$)/g, '');
  val = val.replace(isInt ? /[^\d]/g : /[^\d.]/g, '');
  val = val.replace(/^0+(?=\d)/, '');

  if (!val) {
    return '';
  }
  if (isInt) {
    return val.replace(/^(0\.|\.)/, '');
  }
  if (val.startsWith('.')) {
    return '0.';
  }
  if (val.includes('.')) {
    const parts = val.split('.');

    const integerPart = parts[0];
    let decimalPart = parts[1];

    if (decimalPart.length > maxDecimal) {
      decimalPart = decimalPart.slice(0, maxDecimal);
    }

    val = `${integerPart}.${decimalPart}`;
  }
  return val;
}

/** 生成输入数字过滤函数
 * @param obj 对象
 * @param key 对象里面的字段名
 * @param fn 输入过滤之后执行的函数
 * @param type 输入类型，int整数，float，default: 'int'
 * @param maxDecimal 最大小数位，default: 6
 */
export function generateFilterInputNumFn<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  key: K,
  fn?: () => void,
  type: 'float' | 'int' = 'int',
  maxDecimal = 6
) {
  return (e: Event & { target: HTMLInputElement }) => {
    const oldVal = e?.target?.value ?? obj[key];

    const nextVal = filterInputNum(oldVal, type, maxDecimal) as T[K];

    // 输入框和模型各判一次：只判输入框会漏掉「用户清空输入」的场景
    // （清空时 nextVal 与 oldVal 都是 ''，但模型里还留着旧值）
    const needSyncInput = nextVal !== oldVal;
    const needSyncModel = obj[key] !== nextVal;

    if (needSyncInput && e?.target && Object.prototype.hasOwnProperty.call(e.target, 'value')) {
      e.target.value = nextVal;
    }

    if (needSyncInput || needSyncModel) {
      nextTick(() => {
        obj[key] = nextVal;
        e?.target?.focus?.();
      });
    }
    fn?.();
  };
}

/** 渲染Html字符串片段 */
export function renderHtmlStr(html: string) {
  if (!is.isString(html) || !is.isHtmlStr(html)) {
    return html;
  }
  const innerHTML = sanitizeHtml(html);
  return innerHTML ? createVNode('div', { innerHTML }) : innerHTML;
}

/** 获取当前网站协议+域名（服务端渲染返回空串） */
export function getWebsiteUrl() {
  if (is.isServer()) {
    return '';
  }
  return `${window.location.protocol}//${window.location.hostname}`;
}

/** 获取路由参数（服务端渲染返回 undefined） */
export function getRouterParams() {
  if (is.isServer()) {
    return;
  }
  const params = new URLSearchParams(window.location.search);
  if (!params.size) {
    return;
  }
  const result: Record<string, any> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

/** 去除字符串里的所有空字符 */
export function removeWhitespace(str: any) {
  if (!is.isString(str)) {
    return '';
  }
  return str.replace(/\s+/g, '');
}

/** 会造成原型链污染的 key，合并前一律跳过 */
const UNSAFE_MERGE_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/** 深度合并（只合并 target 自身的可枚举属性，不会污染原型链） */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  for (const key in target) {
    if (!Object.prototype.hasOwnProperty.call(target, key) || UNSAFE_MERGE_KEYS.has(key)) {
      continue;
    }
    src[key] = is.isObject(src[key]) ? deepMerge(src[key], target[key]) : target[key];
  }
  return src;
}

/** 字符串脱敏
 * @param str 值
 * @param number 每侧可见的字符数上限，default: 6
 * @param options = {
 *  showPrefix 显示前缀字符，default: true
 *  showSuffix 显示后缀字符，default: true
 *  middleStr 中间的字符串，default: '****'
 * }
 *
 * 前后缀不会重叠：每侧实际可见 `min(number, floor((len - 1) / 2))`，
 * 所以至少会有 1 个字符被 middleStr 遮住，短串（长度 ≤ 2）直接整体遮挡。
 */
export function desensitization(
  str?: string | number,
  number = 6,
  {
    showPrefix = true,
    showSuffix = true,
    middleStr = '****'
  }: {
    showPrefix?: boolean;
    showSuffix?: boolean;
    middleStr?: string;
  } = {}
) {
  if (!is.isString(str) && !is.isNumber(str)) {
    return str;
  }
  const val = String(str);
  const len = val?.length ?? 0;
  if (!val || !len || number <= 0) {
    return val;
  }
  const visible = Math.min(number, Math.max(0, Math.floor((len - 1) / 2)));
  const prefix = showPrefix ? val.substring(0, visible) : '';
  const suffix = showSuffix ? val.substring(len - visible) : '';
  return `${prefix}${middleStr}${suffix}`;
}

/** 数字转为样式单位
 * @param str 值
 * @param unit 单位，default: 'px'
 */
export function toStyleUnit(str?: string | number | null, unit = 'px') {
  if (str === null || str === '' || str === void 0) {
    return void 0;
  }
  return JKMath.isNan(str) ? String(str) : `${JKMath.toNum(str)}${unit}`;
}

/** 数字转为样式对象 */
export function toStyleObject(style?: string | Record<string, any> | null) {
  if (!style) {
    return {};
  }
  if (is.isObject(style)) {
    return style;
  }
  return style.split(';').reduce(
    (obj, declaration) => {
      // 只按第一个冒号切分：值里本身可能带冒号（如 background: url(http://a/b.png)）
      const colonIndex = declaration.indexOf(':');
      if (colonIndex === -1) {
        return obj;
      }
      const name = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1);
      if (name) {
        const key = name.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
        obj[key] = value.trim();
      }
      return obj;
    },
    {} as Record<string, any>
  );
}

export function openWindow(
  url: string,
  opt?: { target?: '_self' | '_blank' | string; noopener?: boolean; noreferrer?: boolean }
) {
  if (is.isServer() || !url) {
    return;
  }
  const { target = '_blank', noopener = true, noreferrer = true } = opt || {};
  const _url = String(url ?? '').trim();
  if (!_url || !is.isHttpUrl(_url)) {
    return;
  }
  const feature: string[] = [];
  if (noopener) {
    feature.push('noopener=yes');
  }
  if (noreferrer) {
    feature.push('noreferrer=yes');
  }
  window.open(_url, target, feature.join(','));
}

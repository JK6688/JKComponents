import { createVNode, nextTick } from 'vue';
import * as is from './is';
import * as JKMath from './math';

export * from './is';
export * from './math';
export * from './vuePropTypes';
export * from './timeZone';
export * from './withInstall';

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
  let val = String(eventVal);
  val = val.replace(/(^\s*)|(\s*$)/g, '');
  if (val !== '') {
    const cases =
      val.indexOf('0') === 0 && val.length > 1 && val.indexOf('.') !== 1;
    const reg = type === 'int' ? /[^\d]/g : /[^\d.]/g;
    val = val.replace(reg, '');
    if (cases) {
      return '0';
    }
    if (type === 'int') {
      val =
        val.indexOf('0') === 0 && val.length > 1
          ? val.substring(0, val.length - 1)
          : val;
    } else {
      const req1 = evalPro(`/\\.{${maxDecimal},}/g`);
      const req2 = evalPro(`/^(\\d?)+(\\.\\d{0,${maxDecimal}})?$/`);
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

/** 生成输入数字过滤函数
 * @param obj 对象
 * @param key 对象里面的字段名
 * @param fn 输入过滤之后执行的函数
 * @param type 输入类型，int整数，float，default: 'int'
 * @param maxDecimal 最大小数位，default: 6
 */
export function generateFilterInputNumFn<
  T extends Recordable,
  K extends keyof T
>(
  obj: T,
  key: K,
  fn?: () => void,
  type: 'float' | 'int' = 'int',
  maxDecimal = 6
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
  if (!is.isString(html) || !is.isHtmlStr(html)) return html;
  return createVNode('div', { innerHTML: html });
}

/** 获取当前网站协议+域名 */
export function getWebsiteUrl() {
  if (!window) return '';
  return `${window.location.protocol}//${window.location.hostname}`;
}

/** 获取路由参数 */
export function getRouterParams() {
  const params = new URLSearchParams(window.location.search);
  if (!params.size) return;
  const result: Recordable = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

/** 去除字符串里的所有空字符 */
export function removeWhitespace(str: any) {
  if (!is.isString(str)) return '';
  return str.replace(/\s+/g, '');
}

/** 深度合并 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = is.isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}

/** 字符串脱敏
 * @param str 值
 * @param number 可见的字符数，default: 6
 * @param options = {
 *  showPrefix 显示前缀字符，default: true
 *  showSuffix 显示后缀字符，default: true
 *  middleStr 中间的字符串，default: '****'
 * }
 */
export function desensitization(
  str?: string | number,
  number = 6,
  options: {
    showPrefix?: boolean;
    showSuffix?: boolean;
    middleStr?: string;
  } = {
    showPrefix: true,
    showSuffix: true,
    middleStr: '****'
  }
) {
  if (!is.isString(str) && !is.isNumber(str)) return str;
  const val = String(str);
  const len = val?.length ?? 0;
  if (!val || !len || number <= 0) return val;
  const prefix = options.showPrefix ? val.substring(0, number) : '';
  const suffix = options.showSuffix ? val.substring(len - number) : '';
  return `${prefix}${options.middleStr}${suffix}`;
}

/** 数字转为样式单位
 * @param str 值
 * @param unit 单位，default: 'px'
 */
export function toStyleUnit(str?: string | number | null, unit = 'px') {
  if (str === null || str === '' || str === void 0) return void 0;
  return JKMath.isNanValue(str) ? String(str) : `${JKMath.toNum(str)}${unit}`;
}

/** 数字转为样式对象 */
export function toStyleObject(style?: string | Recordable | null) {
  if (!style) return {};
  if (is.isObject(style)) return style;
  return style.split(';').reduce((obj, declaration) => {
    const [property, value] = declaration.trim().split(':');
    if (property) {
      const name = property.trim();
      const key = name.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
      obj[key] = value.trim();
    }
    return obj;
  }, {} as Recordable);
}

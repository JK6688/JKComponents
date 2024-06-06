export function is(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}

/** 是否undefined */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

/** 是否不是undefined */
export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

/** 是否对象  */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

/** 是否Date */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/** 是否null */
export function isNull(val: unknown): val is null {
  return val === null;
}

/** 是否null && 不是undefined */
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

/** 是否null || 不是undefined */
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

/** 是否数字（NaN也是数字） */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

/** 是否字符串 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/** 是否函数 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

/** 是否布尔 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/** 是否正则 */
export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

/** 是否数组 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/** 是否空 */
export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

/** 是否Promise */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, 'Promise') &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  );
}

/** 是否PromiseLink */
export function isPromiseLink<T>(it: T | PromiseLike<T>): it is PromiseLike<T> {
  return it instanceof Promise || typeof (it as any)?.then === 'function';
}

/** 是否Window */
export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/** 是否Element */
export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

/** 是否Map */
export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

/** 是否服务端渲染，没有window对象 */
export const isServer = typeof window === 'undefined';

/** 是否客户端，window对象不为undefined */
export const isClient = !isServer;

/** 是否url */
export function isUrl(path: string): boolean {
  const reg =
    /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

/** 是否Ip */
export const isIp = (ip: string) => /\b(?:\d{1,3}.){3}\d{1,3}\b/.test(ip);

/** 是否邮箱 */
export const isEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

/** 是否号码 */
export function isValidPhoneNumber(phoneNumber: string) {
  const mobileRegex = /^1[3456789]\d{9}$/;

  const landlineRegex = /^(\d{3,4}-)?\d{7,8}$/;

  if (mobileRegex.test(phoneNumber)) return true;

  if (landlineRegex.test(phoneNumber)) return true;

  return false;
}

/** 是否移动端浏览器 */
export function isInMobileBrowser() {
  return (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
    )
  );
}

/** 是否中文 */
export function isZhLang(lang: string) {
  const _lang = lang?.replace(/\s+/g, '')?.toUpperCase?.();
  const zhMap = ['ZH-CN', 'ZH_CH', 'ZH'];
  const enMap = ['EN', 'EN-US'];
  return zhMap.some((x) => x === _lang) || !enMap.some((x) => x === _lang);
}

/** 是否Edge浏览器 */
export function isEdgeBrowser() {
  if (navigator.userAgent.indexOf('Edge') > -1) {
    return true;
  }
  const brands = (navigator as any)?.userAgentData?.brands ?? [];
  for (const item of brands) {
    if (item?.brand === 'Microsoft Edge') {
      return true;
    }
  }
  return false;
}

/** 是否html字符串 */
export const isHtmlStr = (str: string) => isString(str) && /<[^>]+>/g.test(str);

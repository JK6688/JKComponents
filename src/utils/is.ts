const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
}

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

export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

export function isNull(val: unknown): val is null {
  return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val);
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isPromiseLink<T>(it: T | PromiseLike<T>): it is PromiseLike<T> {
  return it instanceof Promise || typeof (it as any)?.then === 'function';
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

export function isRegExp(val: unknown): val is RegExp {
  return is(val, 'RegExp');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isWindow(val: any): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isElement(val: unknown): val is Element {
  return isObject(val) && !!val.tagName;
}

export function isMap(val: unknown): val is Map<any, any> {
  return is(val, 'Map');
}

export const isServer = typeof window === 'undefined';

export const isClient = !isServer;

export function isUrl(path: string): boolean {
  const reg =
    /^(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?(\/#\/)?(?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

export const isIp = (ip: string) => /\b(?:\d{1,3}.){3}\d{1,3}\b/.test(ip);

export const isEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );

export function isValidPhoneNumber(phoneNumber: string) {
  const mobileRegex = /^1[3456789]\d{9}$/;

  const landlineRegex = /^(\d{3,4}-)?\d{7,8}$/;

  if (mobileRegex.test(phoneNumber)) return true;

  if (landlineRegex.test(phoneNumber)) return true;

  return false;
}

export function isInMobileBrowser() {
  return (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)
  );
}

export function isEdgeBrowser() {
  if (navigator.userAgent.indexOf('Edge') > -1) {
    return true;
  } else if (((navigator as any)?.userAgentData?.brands?.length ?? 0) > 0) {
    for (let i = 0; i < (navigator as any)?.userAgentData?.brands?.length; i++) {
      if ((navigator as any).userAgentData.brands[i].brand === 'Microsoft Edge') {
        return true;
      }
    }
  }
  return false;
}

export const isHtmlStr = (str: string) => isString(str) && /<[^>]+>/g.test(str);

function _unwrap<T>(val: T): T {
  if (val === null || typeof val !== 'object') {
    return val;
  }

  let res: any = val;

  if (res?.__v_isRef) {
    res = res.value;
  }
  if (res?.__v_raw) {
    res = res.__v_raw;
  }

  return res !== val ? _unwrap(res) : res;
}

/** 代替lodash.clone */
export function clone<T>(value: T): T {
  const actualValue = _unwrap(value);

  if (actualValue === null || typeof actualValue !== 'object') {
    return actualValue;
  }

  if (Array.isArray(actualValue)) {
    return [...actualValue] as any;
  }

  if (actualValue instanceof Date) {
    return new Date(actualValue.getTime()) as any;
  }

  if (actualValue instanceof RegExp) {
    const result = new RegExp(actualValue.source, actualValue.flags);
    result.lastIndex = actualValue.lastIndex;
    return result as any;
  }

  if (actualValue instanceof Map) {
    return new Map(actualValue) as any;
  }
  if (actualValue instanceof Set) {
    return new Set(actualValue) as any;
  }

  const prototype = Object.getPrototypeOf(actualValue);
  const result = Object.create(prototype);
  return Object.assign(result, actualValue);
}

/** 深拷贝 */
export function cloneDeep<T>(target: T, map = new WeakMap<object, any>()): T {
  const actualTarget = _unwrap(target);

  if (typeof actualTarget !== 'object' || actualTarget === null) {
    return actualTarget;
  }

  if (actualTarget instanceof Date) {
    return new Date(actualTarget) as any;
  }
  if (actualTarget instanceof RegExp) {
    return new RegExp(actualTarget.source, actualTarget.flags) as any;
  }

  if (map.has(actualTarget as object)) {
    return map.get(actualTarget as object);
  }

  if (actualTarget instanceof Map) {
    const result = new Map();
    map.set(actualTarget, result);
    actualTarget.forEach((v, k) =>
      result.set(cloneDeep(k, map), cloneDeep(v, map))
    );
    return result as any;
  }
  if (actualTarget instanceof Set) {
    const result = new Set();
    map.set(actualTarget, result);
    actualTarget.forEach((v) => result.add(cloneDeep(v, map)));
    return result as any;
  }

  let cloneTarget: any;
  if (Array.isArray(actualTarget)) {
    cloneTarget = [];
  } else if (
    Object.prototype.toString.call(actualTarget) === '[object Object]'
  ) {
    cloneTarget = {};
  } else {
    return actualTarget;
  }

  map.set(actualTarget as object, cloneTarget);

  const keys = Array.isArray(actualTarget)
    ? void 0
    : Object.keys(actualTarget as object);

  (keys || (actualTarget as any)).forEach((val: any, key: any) => {
    const actualKey = keys ? val : key;
    try {
      cloneTarget[actualKey] = cloneDeep((actualTarget as any)[actualKey], map);
    } catch (e) {
      console.warn(`Property ${String(actualKey)} could not be cloned.`, e);
    }
  });

  return cloneTarget as T;
}

/** 代替lodash.pick */
export function pick<T extends object, K extends keyof T>(
  obj: T | null | undefined,
  keys: K | K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  if (obj === null || obj === void 0) {
    return result;
  }

  const keyList = Array.isArray(keys) ? keys : [keys];

  for (const key of keyList) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

/** 代替lodash.pickBy */
export function pickBy<T extends object, S extends T[keyof T]>(
  obj: T | null | undefined,
  predicate: (value: T[keyof T], key: keyof T) => value is S
): { [K in keyof T]?: S };
export function pickBy<T extends object>(
  obj: T | null | undefined,
  predicate: (value: T[keyof T], key: keyof T) => any
): Partial<T>;
export function pickBy(obj: any, predicate: (v: any, k: string) => any): any {
  const result: any = {};

  if (obj === null || obj === void 0) {
    return result;
  }

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (predicate(value, key)) {
      result[key] = value;
    }
  });

  return result;
}

/** 代替lodash.omit */
export function omit<T extends object, K extends keyof T = keyof T>(
  obj: T,
  keys: K | K[]
): Omit<T, K>;
export function omit<T extends object>(obj: T): T;
export function omit<T extends null | undefined>(obj: T, keys?: any): T;
export function omit<T extends string | number | boolean | symbol>(
  obj: T,
  keys?: any
): T;
export function omit(obj: any, keys?: any): any {
  if (obj === null || obj === void 0 || typeof obj !== 'object') {
    return obj;
  }

  if (keys === void 0 || keys === '' || (Array.isArray(keys) && !keys.length)) {
    return { ...obj };
  }

  const keysToOmit = Array.isArray(keys) ? keys : [keys];
  const result = {} as any;
  const allKeys = Reflect.ownKeys(obj);

  for (const key of allKeys) {
    if (!keysToOmit.includes(key as any)) {
      result[key] = obj[key];
    }
  }

  return result;
}

type GetPathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? GetPathValue<Exclude<T[Key], undefined | null>, Rest>
    : undefined
  : P extends keyof T
    ? T[P]
    : undefined;
/** 代替lodash.get */
export function get<T extends object, P extends string>(
  obj: T,
  path: P
): GetPathValue<T, P>;
export function get<T extends object, P extends string, D>(
  obj: T,
  path: P,
  defaultValue: D
): Exclude<GetPathValue<T, P>, undefined> | D;
export function get(obj: any, path: string, defaultValue?: any): any {
  if (obj === null || obj === void 0) {
    return defaultValue;
  }
  if (!path) {
    return obj;
  }
  const segments = path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

  let result = obj;
  for (const key of segments) {
    if (result === null || result === void 0) {
      return defaultValue;
    }
    result = result[key];
  }

  return result === void 0 ? defaultValue : result;
}

/** 代替lodash.set */
export function set<T>(obj: T, path: string | number, value: any): T {
  if (Object(obj) !== obj) {
    return obj;
  }
  const segments = path
    .toString()
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);

  let current: any = obj;

  for (let i = 0; i < segments.length - 1; i++) {
    const key = segments[i];
    const nextKey = segments[i + 1];
    if (
      !(key in current) ||
      current[key] === null ||
      typeof current[key] !== 'object'
    ) {
      const isNextKeyNumber = /^\d+$/.test(nextKey);
      current[key] = isNextKeyNumber ? [] : {};
    }

    current = current[key];
  }
  const lastKey = segments[segments.length - 1];
  current[lastKey] = value;

  return obj;
}

/** 代替lodash.isNil */
export function isNil(value: any): value is null | undefined {
  return value == null;
}

/** 代替lodash.isEqual */
export function isEqual(value: any, other: any): boolean {
  if (value === other) {
    return true;
  }

  if (
    typeof value === 'number' &&
    typeof other === 'number' &&
    isNaN(value) &&
    isNaN(other)
  ) {
    return true;
  }

  if (
    typeof value !== 'object' ||
    value === null ||
    typeof other !== 'object' ||
    other === null
  ) {
    return false;
  }

  if (
    Object.prototype.toString.call(value) !==
    Object.prototype.toString.call(other)
  ) {
    return false;
  }
  if (value instanceof Date) {
    return value.getTime() === other.getTime();
  }
  if (value instanceof RegExp) {
    return value.toString() === other.toString();
  }

  const isArrValue = Array.isArray(value);
  const isArrOther = Array.isArray(other);
  if (isArrValue !== isArrOther) {
    return false;
  }

  if (isArrValue) {
    if (value.length !== other.length) {
      return false;
    }
    for (let i = 0; i < value.length; i++) {
      if (!isEqual(value[i], other[i])) {
        return false;
      }
    }
    return true;
  }

  const keysA = Object.keys(value);
  const keysB = Object.keys(other);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(other, key) ||
      !isEqual(value[key], other[key])
    ) {
      return false;
    }
  }

  return true;
}

/** 代替lodash.uniq */
export function uniq<T>(array: T[] | null | undefined): T[] {
  if (!Array.isArray(array)) {
    return [];
  }
  return [...new Set(array)];
}

/** 代替lodash.uniqBy */
export function uniqBy<T>(
  array: T[] | null | undefined,
  iteratee: ((item: T) => any) | keyof T
): T[] {
  if (!Array.isArray(array)) {
    return [];
  }

  const result: T[] = [];
  const seen = new Set();

  for (const item of array) {
    const identifier =
      typeof iteratee === 'function' ? iteratee(item) : item[iteratee];

    if (!seen.has(identifier)) {
      seen.add(identifier);
      result.push(item);
    }
  }

  return result;
}

/** 代替lodash.upperFirst */
export function upperFirst(str: string | null | undefined) {
  if (!str) {
    return '';
  }
  const s = String(str);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function _isObject(item: any): item is Record<string, any> {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

/** 代替lodash.merge */
export function merge<T extends object, S extends object[]>(
  target: T,
  ...sources: S
): T & any {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();

  if (_isObject(target) && _isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const targetValue = target[key as keyof T];

        if (_isObject(sourceValue)) {
          if (!targetValue || !_isObject(targetValue)) {
            (target as any)[key] = {};
          }
          merge((target as any)[key], sourceValue);
        } else if (Array.isArray(sourceValue)) {
          if (!Array.isArray(targetValue)) {
            (target as any)[key] = [];
          }
          sourceValue.forEach((item, index) => {
            if (_isObject(item)) {
              if (!(target as any)[key][index]) {
                (target as any)[key][index] = {};
              }
              merge((target as any)[key][index], item);
            } else {
              (target as any)[key][index] = item;
            }
          });
        } else if (sourceValue !== void 0) {
          (target as any)[key] = sourceValue;
        }
      }
    }
  }

  return merge(target, ...sources);
}

/** 代替lodash.difference */
export function difference<T>(
  array: T[] | null | undefined,
  ...values: T[][]
): T[] {
  if (!Array.isArray(array)) {
    return [];
  }
  const excludeSet = new Set(values.flat());

  return array.filter((item) => !excludeSet.has(item));
}

/** 代替lodash.intersection */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) {
    return [];
  }
  const firstArray = [...new Set(arrays[0])];
  const restArrays = arrays.slice(1);

  if (restArrays.length === 0) {
    return firstArray;
  }
  const sets = restArrays.map((arr) => new Set(arr));
  return firstArray.filter((item) => {
    return sets.every((set) => set.has(item));
  });
}

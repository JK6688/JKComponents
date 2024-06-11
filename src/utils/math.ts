import BJS from 'bignumber.js';

export type BigNumVal = Parameters<typeof BJS>[0];

export type BigNumValType = BigNumVal | undefined | null | boolean;

export type BigNumObj = BJS;

export const DOWN = BJS.ROUND_DOWN;

export const UP = BJS.ROUND_UP;

export const BigNumber = BJS;

export function helper(val: BigNumValType): BigNumObj {
  if (isBool(val)) return BJS(~~val);

  if (!val) return BJS(0);

  if (isBigNum(val)) return val.isNaN() ? BJS(0) : val;

  const res = BJS(val);
  return res.isNaN() ? BJS(0) : res;
}

/** 是否为boolean值 */
export function isBool(val: any): val is boolean {
  return typeof val === 'boolean';
}

/** 是否为BigNumber对象 */
export function isBigNum(val: any): val is BigNumObj {
  return BJS.isBigNumber(val);
}

/** 是否为数字 */
export function isNum(val: any): val is number {
  return typeof val === 'number' && !isNanValue(val);
}

/** 是否为NaN值(传入任意值转bignumber是否为NaN) */
export function isNanValue(val: any) {
  if (val == null || val == void 0) return false;
  return BJS(val).isNaN();
}

/** 是否为整数(传入任意值转bignumber是否为整数) */
export function isInt(val: any) {
  if (val == null || val == void 0) return false;
  return BJS(val).isInteger();
}

/** 是否大于
 * @example isGreaterThan('456', 132) => true
 */
export function isGreaterThan(num1: BigNumVal, num2: BigNumVal) {
  return helper(num1).isGreaterThan(helper(num2));
}

/** 是否小于
 * @example isLessThan('123', 132) => true
 */
export function isLessThan(num1: BigNumVal, num2: BigNumVal) {
  return helper(num1).isLessThan(helper(num2));
}

/** 是否等于
 * @example isEqualTo('123', 123) => true
 */
export function isEqualTo(num1: BigNumVal, num2: BigNumVal) {
  return helper(num1).isEqualTo(helper(num2));
}

/** 是否大于等于
 * @example isGreaterThanOrEqualTo('1223', 123) => true
 * @example isGreaterThanOrEqualTo('123', 123) => true
 */
export function isGreaterThanOrEqualTo(num1: BigNumVal, num2: BigNumVal) {
  return helper(num1).isGreaterThanOrEqualTo(helper(num2));
}

/** 是否小于等于
 * @example isLessThanOrEqualTo('123', 123) => true
 * @example isLessThanOrEqualTo('13', 123) => true
 */
export function isLessThanOrEqualTo(num1: BigNumVal, num2: BigNumVal) {
  return helper(num1).isLessThanOrEqualTo(helper(num2));
}

/** 转为BigNumber对象 */
export function toBigNum(val: BigNumValType) {
  return helper(val);
}

/** 转为数字 */
export function toNum(val: BigNumValType) {
  return helper(val).toNumber();
}

/**
 * 转为整数
 * @example toInt(15.99) => 15
 * @example toInt(-22.22) => -22
 */
export function toInt(val: BigNumValType, isUp = false) {
  return toNum(helper(val).integerValue(isUp ? UP : DOWN));
}

/** 转为字符串 */
export function toString(val: BigNumValType) {
  return helper(val).toString();
}

/**
 * 保留小数位（超过指定位数截断，小于位数不进行0补充）
 * @param val val
 * @param decimal 保留小数位数
 * @param isUp 是否向上舍入  default: false
 * @example toDecimalPlaces(2.326, 2) => 2.32
 * @example toDecimalPlaces(-5.526, 2) => -5.52
 * @example toDecimalPlaces(2.326, 2, true) => 2.33
 * @example toDecimalPlaces(-5.526, 2, true) => -5.53
 */
export function toDecimalPlaces(
  val: BigNumValType,
  decimal?: number,
  isUp = false
) {
  const result = helper(val);
  return decimal !== void 0
    ? toNum(result.decimalPlaces(decimal, isUp ? UP : DOWN))
    : toNum(result);
}

/** 转为千位符数字 */
export function toLocaleString(val: BigNumValType) {
  return helper(val).toFormat();
}

/**
 * 相加
 * @example add(3, 3) => 6
 * @example add(3, 3, 4) => 10
 */
export function add(...vals: BigNumValType[]) {
  if (vals.length === 0) return 0;
  const res = vals.reduce((acc, curr) => helper(acc).plus(helper(curr)), 0);
  return toNum(res);
}

/**
 * 相减
 * @example subtract('5', 3) => 2
 * @example subtract(5, 3, '2') => 0
 */
export function subtract(...vals: BigNumValType[]) {
  if (vals.length === 0) return 0;
  const res = vals.reduce((acc, curr) => helper(acc).minus(helper(curr)));
  return toNum(res);
}

/**
 * 相乘
 * @example multiply('3', 5) => 15
 * @example multiply(3, 5, '2') => 30
 */
export function multiply(...vals: BigNumValType[]) {
  if (vals.length === 0) return 0;
  const res = vals.reduce((acc, curr) => helper(acc).times(helper(curr)), 1);
  return toNum(res);
}

/**
 * 相除
 * @example divide('9', 3) => 3
 * @example divide('100', 2, 10) => 5
 * @example divide('100', 0, 10) => 0
 */
export function divide(...vals: BigNumValType[]) {
  if (vals.length === 0) return 0;

  const bigNums = vals.map((x) => toBigNum(x));

  // 除数有0存在时
  if (bigNums.some((x) => x.isZero())) return 0;

  const res = bigNums.reduce((acc, curr) => acc.dividedBy(curr));

  return res.toNumber();
}

/**
 * 幂运算
 * @example power('2', '3') => 8
 * @example power('10', 2) => 100
 * @example power('-2', 3) => -8
 */
export function power(base: BigNumValType, exponent: BigNumValType) {
  return toNum(helper(base).pow(helper(exponent)));
}

/**
 * 小数转为百分比
 * @example 0.1111 => 11.11%
 */
export function formatRate(val: BigNumValType, unit = '%') {
  const result = helper(val).times(100);
  return `${isGreaterThan(result, 0) ? toDecimalPlaces(result, 2) : 0}${unit}`;
}

/**
 * 转为百分小数
 * @example 22.22 => 0.2222
 */
export function unFormatRate(val: BigNumValType) {
  const result = helper(val).div(100);
  return isGreaterThan(result, 0) ? toDecimalPlaces(result, 4) : 0;
}

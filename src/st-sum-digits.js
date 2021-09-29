import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let temp = '' + n;
  const o = temp
    .split('')
    .map((i) => +i)
    .filter((j) => j > 0);
  if (o.length === 1) {
    return o[0];
  }
  getSumOfDigits(
    o.reduce((res, curr) => {
      return res + curr;
    }, 0)
  );
}

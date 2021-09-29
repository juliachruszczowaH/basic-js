import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const array1 = s1.split('');
  const array2 = s2.split('');
  let counter = 0;
  array1.forEach((i) => {
    if (array2.includes(i)) {
      counter = counter + 1;
      array2[array2.indexOf(i)] = null;
    }
  });
  return counter;
}

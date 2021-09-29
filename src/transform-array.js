import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array`)

  }
  const fun = arr.find((i) => typeof i === 'string');
  const arr1 = arr.slice(0, arr.indexOf(fun));
  const arr2 = arr.slice(arr.indexOf(fun) + 1);
  if (fun === '--discard-prev') {
    arr1.pop();
  }
  if (fun === '--discard-next') {
    arr2.unshift();
    
  }
  return fun ? arr1.concat(arr2) : arr
}

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
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array`);
  }
  let result = [];
  arr.forEach((item, index, array) => {
    switch (item) {
      case '--double-prev': {
        result.push(array[index - 1] * 2);
        break;
      }
      case '--discard-prev': {
        result.pop();
        break;
      }
      case '--double-next': {
        result.push(array[index + 1] * 2);
        break;
        index=index+2;
      }
      case '--discard-next': {
        index=index+2;
        break;
      }
      default:
        result.push(item);
        break;
    }
  });

  return result;
}

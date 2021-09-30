import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  matrix.forEach((item, index) => {
    item.forEach((el, i) => {
      if (index > 0) {
        if (matrix[index - 1][i] !== 0) {
          result.push(el);
        }
      } else{
        if(el!==0){
          result.push(el);
        }
      }
    });
  });
  return result.reduce((sum, current) => {
    return sum + current;
  }, 0);
}

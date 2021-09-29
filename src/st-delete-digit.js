import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const string=n.toString().split('');
  const array=[]
  string.forEach(i=>{
array.push(string.filter(j=>j!==i).join(''))
array.map(i=>+i).sort((a,b)=>function(){
  return a-b
})
return array.pop();
  })
}

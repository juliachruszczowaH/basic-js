import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let addedString='';
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  if(addition||addition===false||addition===null){
    addedString=Array(additionRepeatTimes).fill(`${addition}`).join(typeof additionSeparator !== 'undefined'?`${additionSeparator}`:'|')
  }
  return Array(repeatTimes).fill(str+addedString).join(typeof separator !== 'undefined'?`${separator}`:'+');
}

const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options ) {
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let addition = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  let resultStr = [];
  let separators = [];

  for (let i = 1; i <= additionRepeatTimes; i++) {
    separators.push(addition);
  }

  for (let j = 1; j <= repeatTimes; j++) {
    resultStr.push(str + separators.join(`${additionSeparator}`));
  }

  return resultStr.join(`${separator}`);
}

module.exports = {
  repeater
};

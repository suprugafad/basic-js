const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');

  let tmp;
  let count = 1;
  let result = '';

  for (let i = 0; i < array.length; i++) {
    tmp = array[i];

    if (i <= array.length && tmp === array[i + 1]) {
      count++;
    } else if (count > 1) {
      result += count + array[i];
      count = 1;
    } else {
      result += array[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};

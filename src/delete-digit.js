const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n ) {
  let arr = n.toString().split('');
  let maxNum = Number(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let num = [].concat(arr);
    num.splice(i, 1);
    num = Number(num.join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};

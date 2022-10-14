const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let result = {};

  for (let item of domains) {
    let arr = item.split('.').reverse();
    let dm = '';

    for (let el of arr) {
      dm += '.' + el;

      if (result.hasOwnProperty(dm)) {
        result[dm] += 1;
      } else {
        result[dm] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

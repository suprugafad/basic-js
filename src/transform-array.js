const { NotImplementedError } = require('../extensions/index.js');
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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const out = arr.slice();
  const discard = Symbol("Discarded item");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < out.length - 1) {
          out[i + 1] = discard;
        }
        out[i] = discard;
        break;
      case '--discard-prev':
        if (i > 0) {
          out[i - 1] = discard;
        }
        out[i] = discard;
        break;
      case '--double-next':
        if (i < out.length - 1) {
          out[i] = out[i + 1];
        } else {
          out[i] = discard;
        }
        break;
      case '--double-prev':
        if (i > 0) {
          out[i] = out[i - 1];
        } else {
          out[i] = discard;
        }
    }
  }

  return out.filter(el => el !== discard);
}

module.exports = {
  transform
};

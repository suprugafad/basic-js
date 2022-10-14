const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function sortByHeight(arr) {
  let tmp = [];
  arr.map((el) => {
    if (el !== -1) {
      tmp.push(el);
    }
    return -1;
  });

  quickSort(tmp, 0, tmp.length - 1);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      while (j < tmp.length) {
        arr[i] = tmp[j];
        j++;
        break;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};

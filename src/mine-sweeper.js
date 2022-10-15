const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {

  function check(i,z) {
    let sum = 0;
    let mapArr = [
      [i-1, z-1], [i-1, z], [i-1, z+1],
      [i, z-1],             [i, z+1],
      [i+1, z-1], [i+1, z], [i+1, z+1],
    ]

    for (let i of mapArr) {
      if (matrix[i[0]] && matrix[i[0]][i[1]]) sum++;
    }

    return sum;
  }

  let res = [];
  for (let i = 0; i<matrix.length; i++) {
    res[i] = [];
    for (let z = 0; z<matrix[i].length; z++) {
      res[i][z] = check(i,z);
    }
  }
  return res;
}

module.exports = {
  minesweeper
};

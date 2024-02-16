/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
  /3 = 0  3% 3%

 */
var setZeroes = function (matrix) {
    let lengthOfColumns = matrix[0].length;
    let hashMap = {}
    for (let i = 0; i < matrix.length * lengthOfColumns; i++) {
        let row = Math.floor(i / lengthOfColumns);
        let column = i - row * lengthOfColumns;
        if (matrix[row][column] == 0) {
            hashMap[row + "r"] = true;
            hashMap[column + "c"] = true;
        }

    }
    for (let i = 0; i < matrix.length * lengthOfColumns; i++) {
        let row = Math.floor(i / lengthOfColumns);
        let column = i - row * lengthOfColumns;
        if (hashMap[row + "r"]) {
            matrix[row][column] = 0;
        }
        if (hashMap[column + "c"]) {
            matrix[row][column] = 0;
        }
    }
    return matrix;
};
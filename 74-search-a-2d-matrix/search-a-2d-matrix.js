/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const noOfRows = matrix.length;
    const noOfCols = matrix[0].length
    let left = 0;
    let right = noOfRows * noOfCols-1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let row = Math.floor(mid / noOfCols);
        let col = mid - row * noOfCols;
        console.log(left, right,[row,col], mid)
        if (matrix[row][col] == target) return true;
        if (matrix[row][col] > target) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return false;
};
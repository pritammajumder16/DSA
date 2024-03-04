/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
//Naive approach
const KNIGHTDIRECTIONS = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
var knightProbability = function (n, k, row, column) {
    const newDP = new Array(k).fill(0).map(e => new Array(n).fill(0).map(e => new Array(n)))
    let probability = recursiveFunc(n, k, 0, row, column, newDP)
    return probability
};
const recursiveFunc = (n, k, count, row, column, newDP) => {
    if (row >= n || row < 0 || column >= n || column < 0) return 0;
    if (count == k) return 1;
    if (newDP[count][row][column]) {
        return newDP[count][row][column]
    }
    let probability = 0;
    KNIGHTDIRECTIONS.forEach(dir => {
        const newRow = dir[0] + row;
        const newColumn = dir[1] + column;
        probability = probability + recursiveFunc(n, k, count + 1, newRow, newColumn, newDP) / 8;
    })
    newDP[count][row][column] = probability;
    return probability;

}
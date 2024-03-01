/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let noOfRows = matrix.length;
    let noOfCols = matrix[0].length;
    let secondMatrix = []
    for (let i = 0; i < noOfRows; i++) {
        for (let j = 0; j < noOfCols; j++) {
            if (!secondMatrix[j])
                secondMatrix[j] = []
            secondMatrix[j][i] = matrix[i][j]
        }
    }
    return secondMatrix;
};
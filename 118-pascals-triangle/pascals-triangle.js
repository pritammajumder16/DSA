/**
 * @param {number} numRows
 * @return {number[][]}
  1   [[1]]   2  [[1],[1,1]]
 */
var generate = function (numRows) {
    let finalArr = []
    for (let i = 0; i < numRows; i++) {
        if (i == 0) {
            finalArr.push([1]);
            continue;
        }
        let tempArr = [];
        for (let j = 0; j <= i; j++) {
            let num = 0;
            if (finalArr[i - 1][j - 1]) {
                num += finalArr[i - 1][j - 1];
            }

            if (finalArr[i - 1][j]) {
                num += finalArr[i - 1][j];
            }
            tempArr.push(num);
        }
        finalArr.push(tempArr);
    }
    return finalArr;
};
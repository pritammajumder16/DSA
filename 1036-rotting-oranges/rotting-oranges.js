/**
 * @param {number[][]} grid
 * @return {number}
 */
const EMPTY = 0;
const FRESH = 1;
const ROTTEN = 2;
const DIRECTIONS = [[-1, 0], [1, 0], [0, 1], [0, -1]]
var orangesRotting = function (grid) {
    const noOfRows = grid.length;
    const noOfCols = grid[0].length;
    let queue = []
    let totalMinutes = 0;
    let totalFreshOrange = 0;
    for (let row = 0; row < noOfRows; row++) {
        for (let col = 0; col < noOfCols; col++) {
            if (grid[row][col] == ROTTEN) {
                queue.push([row, col]);
            } else if (grid[row][col] == FRESH) {
                totalFreshOrange++;
            }
        }
    }
    if(queue.length) totalMinutes--;
    while (queue.length) {
        let currentLevel = queue.length;
        while (currentLevel > 0) {
            let currentItem = queue.shift()
            DIRECTIONS.forEach(direction => {
                let checkRow = currentItem[0] + direction[0]
                let checkCol = currentItem[1] + direction[1]
                if (checkRow >= 0 && checkRow < noOfRows && checkCol >= 0 && checkCol < noOfCols && grid[checkRow][checkCol] == FRESH) {
                    grid[checkRow][checkCol] = ROTTEN;
                    totalFreshOrange--;
                    queue.push([checkRow, checkCol])
                }
            })
            currentLevel--;
        }
        totalMinutes++;
    }
    if (totalFreshOrange) {
        return -1;
    }
    return totalMinutes;
};
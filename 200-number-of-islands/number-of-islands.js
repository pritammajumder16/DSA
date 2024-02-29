/**
 * @param {character[][]} grid
 * @return {number}
 */
const ISLAND = 1;
const WATER = 0;
var numIslands = function(grid) {
    let nRows = grid.length;
    let nCols = grid[0].length
    let directions = [[-1,0],[0,1],[1,0],[0,-1]];
    let numberOfIslands = 0;
    for(let i = 0; i <nRows;i++){
        for(let j = 0; j<nCols;j++){
            if(grid[i][j]==ISLAND){
                numberOfIslands++;
                const queue = [[i,j]];
                while(queue.length){
                    const currentItem = queue.shift();
                    directions.forEach(direction=>{
                        const checkRow = direction[0]+currentItem[0];
                        const checkCol = direction[1]+currentItem[1];
                        if(checkRow>=0 && checkRow<nRows && checkCol>=0 && checkCol < nCols && grid[checkRow][checkCol]==ISLAND){
                            queue.push([checkRow,checkCol])
                            grid[checkRow][checkCol]=WATER;
                        }
                    })
                }
            }
        }
    }
    return numberOfIslands;
};
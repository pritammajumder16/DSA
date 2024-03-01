/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
  /3 = 0  3% 3%

 */
 const DIRECTIONS = [[-1,0],[0,1],[1,0],[0,-1]]
var setZeroes = function (matrix) {
    let seen = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false))
    let toSearch = []
    for(let i = 0; i <matrix.length;i++){
        for(let j = 0; j < matrix[0].length;j++){
            if(matrix[i][j]==0)
                toSearch.push([i,j])
        }
    }
    toSearch.forEach(search=>{
        seen[search[0]][search[1]]=false;
        matrix = dfsChangeMat(matrix,search[0],search[1],null,seen)
    })
    return matrix;
};

const dfsChangeMat = function(matrix,row,col,dir,seen){

    seen[row][col]=true;
    if(dir==null)
    {
        DIRECTIONS.forEach((dir,index)=>{
            const newRow= row+dir[0]
            const newCol = col+dir[1]
            if(newRow>=0 && newRow<matrix.length&&newCol>=0&&newCol<matrix[0].length){
                return dfsChangeMat(matrix,newRow,newCol,index,seen)
            }
        })
    }else{    
         matrix[row][col]=0;
         const newRow= row+DIRECTIONS[dir][0]
            const newCol = col+DIRECTIONS[dir][1]
            if(newRow>=0 && newRow<matrix.length&&newCol>=0&&newCol<matrix[0].length){
                return dfsChangeMat(matrix,newRow,newCol,dir,seen)
            }
    }
    return matrix
}
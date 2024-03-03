/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let adjList = manager.map(()=>[])
    let seen = manager.map(()=>false)
    for(let i = 0;i<n;i++){
        if(manager[i]!=-1){
        adjList[manager[i]].push(i)}
    }
    return traverseDFS(headID,adjList,informTime,seen);
};

const traverseDFS = (currId,adjList,informTime,seen)=>{
    if(seen[currId])return;
    seen[currId]=true;
    let maxCost = 0;
    for(let i = 0; i < adjList[currId].length;i++){
        maxCost = Math.max(maxCost,traverseDFS(adjList[currId][i],adjList,informTime,seen))
    }
    return maxCost+informTime[currId];
}
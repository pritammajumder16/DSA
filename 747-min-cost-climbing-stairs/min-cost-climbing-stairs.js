/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCostTable = new Array(cost.length).fill(Infinity)
    return  Math.min(recursiveFindLowestCost(cost,0,minCostTable),recursiveFindLowestCost(cost,1,minCostTable))
};
const recursiveFindLowestCost = (cost,index,minCostTable)=>{
    if(index>(cost.length-1)){
        return 0;
    }
    let minCost = 0;
    if(minCostTable[index]&&minCostTable[index]!=Infinity){
        minCost = minCostTable[index]
    }else{
        minCost = Math.min(recursiveFindLowestCost(cost,index+1,minCostTable),recursiveFindLowestCost(cost,index+2,minCostTable))
    }
    if(minCostTable[index]==Infinity){
        minCostTable[index] = minCost;
    }
    return minCost+cost[index]
}
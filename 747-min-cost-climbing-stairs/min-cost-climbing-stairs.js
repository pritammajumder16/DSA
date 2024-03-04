/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dpOne = cost[0]
    let dpTwo = cost[1]
    let minCost=0;
    if(cost.length==1)return dpOne;
    if(cost.length==2) return dpOne>dpTwo?dpTwo:dpOne;
    cost.push(0)
    for(let i = 2 ; i < cost.length; i ++){
        minCost=cost[i]+Math.min(dpOne,dpTwo);
        dpOne=dpTwo;
        dpTwo = minCost;
    }
    return minCost
};
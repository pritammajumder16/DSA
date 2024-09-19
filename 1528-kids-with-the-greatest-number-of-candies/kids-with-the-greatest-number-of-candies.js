/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatestFinalArr = []
    let greatestCandies=-1
    for(let i = 0; i <candies.length;i++){
        if(greatestCandies<candies[i]){
            greatestCandies=candies[i]
        }
    }
    for(let i = 0;i<candies.length;i++){
        if(candies[i]+extraCandies>=greatestCandies){
            greatestFinalArr[i]=true
        }else{
            greatestFinalArr[i]=false
        }
    }
        return greatestFinalArr;
};
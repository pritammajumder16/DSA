/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */ 0, 1 ,2
var findMaxAverage = function(nums, k) {
    let firstPointer =0;
    let secondPointer = 0;
    let sumSoFar=0;
    let largestSum= -Infinity;
    while(secondPointer<nums.length){
        sumSoFar+=nums[secondPointer];
        secondPointer++;
        if(secondPointer-firstPointer==k){
            if(largestSum<sumSoFar){
                largestSum=sumSoFar;
            }
            sumSoFar=sumSoFar-nums[firstPointer]
            firstPointer++;
        }
    }
    return largestSum/k
};
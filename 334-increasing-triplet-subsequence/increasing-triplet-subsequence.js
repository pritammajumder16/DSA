/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Number.MAX_SAFE_INTEGER; 
    let second = Number.MAX_SAFE_INTEGER; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < first) {
            first = nums[i]
        } else if (nums[i] < second && nums[i] != first) {
            second = nums[i]
        } else if (nums[i] > first && nums[i] > second) return true
    }
    return false;
};
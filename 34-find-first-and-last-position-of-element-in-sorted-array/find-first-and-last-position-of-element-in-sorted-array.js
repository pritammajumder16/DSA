/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let result = [-1, -1] // [1,2,3,3,3,3,4] target 3 [-1,-1] O(n) O(log n) it works on sorted array
    const idx = binarySearch(nums, target, 0, nums.length - 1); // 3
    if (idx==-1) {
        return result;
    }
    result = [idx, idx]; // [3,3]
    if (nums[idx - 1] == target) {
        //we have to find the left most position
        let temp = result[0];
        while (temp >= 0) {
            temp = binarySearch(nums, target, 0, temp - 1)
            if (temp >= 0)
                result[0] = temp;
        }
    }
    if (nums[idx + 1] == target) {
        //we have to find the right most position as well
        let temp = result[1];
        while (temp >= 0) {
            temp = binarySearch(nums, target, temp + 1, nums.length - 1)
            if (temp >= 0)
                result[1] = temp;
        }
    }
    return result;
};
const binarySearch = (nums, target, left, right) => {
    while (left <= right) {

        const mid = Math.floor((left + right) / 2)
        if (target == nums[mid]) {
            return mid
        }
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;

}
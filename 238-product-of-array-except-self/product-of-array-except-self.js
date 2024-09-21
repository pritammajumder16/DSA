/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = 1;
    let suffix = 1;
    const products = new Array(nums.length).fill(1)
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        products[i] = products[i] * prefix;
        products[j] = products[j] * suffix;
        prefix = prefix * nums[i];
        suffix = suffix * nums[j]
    }
    return products;
};
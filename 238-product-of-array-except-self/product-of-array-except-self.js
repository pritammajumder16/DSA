/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const productsFromLeft = {};
    const productsFromRight = {};
    const products = []
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        if (i == 0)
            productsFromLeft[i] = 1
        else {
            productsFromLeft[i] = productsFromLeft[i - 1] * nums[i - 1]
        }
        if (j == nums.length - 1)
            productsFromRight[j] = 1
        else {
            productsFromRight[j] = productsFromRight[j + 1] * nums[j + 1]
        }
    }
    // console.log(productsFromLeft, productsFromRight)
    for (let i = 0; i < nums.length; i++) {
        if (i == 0)
            products[i] = productsFromRight[i]
        else if (i == nums.length - 1) {
            products[i] = productsFromLeft[i]
        } else {
            products[i] = productsFromRight[i] * productsFromLeft[i]
        }
    }
    return products;
};
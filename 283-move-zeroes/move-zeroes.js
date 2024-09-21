/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length=nums.length;
    for(let i = 0,counter=0; i <length;i++,counter++){
        if(nums[i]==0){
            nums.push(0);
            nums.splice(i,1)
            i--;
        }
        if(counter==nums.length-1)
        return nums
    }
    return nums;
};
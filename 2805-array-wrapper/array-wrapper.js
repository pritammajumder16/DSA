/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.numArr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
   return  this.numArr.reduce((res,num)=>res+num,0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "["+this.numArr.toString()+"]"
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
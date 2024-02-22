
var MyQueue = function () {
    this.stack = []
    this.stack2 = []
};
//1
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x)
};
//[1, 2]  
/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    while (this.stack.length) {
        this.stack2.push(this.stack.pop())
    }
    let result =  this.stack2.pop();
    while (this.stack2.length) {
        this.stack.push(this.stack2.pop())
    }
    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    while (this.stack.length) {
        this.stack2.push(this.stack.pop())
    }
    let elem = this.stack2[this.stack2.length - 1]
    while (this.stack2.length) {

        this.stack.push(this.stack2.pop())
    }
    console.log(elem)
    return elem;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stack.length == 0) {
        return true
    }
    return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()                                                                                                                                                                            
 */
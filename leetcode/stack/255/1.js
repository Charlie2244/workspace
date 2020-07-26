/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
 
};

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
 this.queue.push(x)

};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
 return this.queue.pop()
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
 return this.queue[this.queue.length - 1]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
 return this.queue.length?false:true
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
/*
155 min stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/
var MinStack = function() {
    this.elements = [];
  };
  
  /**
  
   @param {number} x
   @return {void}
   */
  MinStack.prototype.push = function(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  };
  /**
  
   @return {void}
   */
  MinStack.prototype.pop = function() {
    this.elements.pop();
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
  };
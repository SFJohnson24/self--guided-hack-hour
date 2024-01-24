/*
232 implement queue using stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

*/


//can also do it with 2 stacks
// JS program to implement Queue using
// two stacks with costly deQueue()

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  enQueue(x) {
    // Push item into the first stack
    this.s1.push(x);
  }
  // Dequeue an item from the queue
  deQueue() {
    // if both stacks are empty
    if (this.s1.length == 0 && this.s2.length == 0) {
      return -1;
    }
    // if s2 is empty, move elements from s1
    if (this.s2.length == 0) {
      while (this.s1.length != 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
  //because s2 will not be empty, no more elements will be moved over, you will dequeue what has been transferred from first call to dequeue if stack 1 had several elements moved to stack 2

  peek() {
  if (this.s2.length > 0){
      return this.s2[this.s2.length-1]
  }else if (this.s1.length > 0){
      return this.s1[0]
  }else{
      return
  }
};

/**
* @return {boolean}
*/
  empty = function() {
  if (this.s1.length == 0 && this.s2.length == 0){
      return true
  }else{
  return false
  }
}
}


function Queue() {
  // this.storage set equal to empty obj
  this.storage = {};
  //this.index set equal to 0
  this.index = 0;
}

Queue.prototype.enqueue = function (value) {
  //add the key:value pair to storage using bracket notation and this.index
  this.storage[this.index] = value;
  // increment this.index
  this.index++;
};

Queue.prototype.dequeue = function () {
  //check if there is anything in storage, if not, return undef
  if (this.index === 0) return;
  //declare a variable and set equal to the first index of storage
  const first = this.storage[0];
  //for loop up to value of this.index
  for (let i = 0; i < this.index - 1; i++) {
    //take all values in storage and set equal to the index + 1
    this.storage[i] = this.storage[i + 1];
  }
  //delete last value in storage
  delete this.storage[this.index - 1];
  //decrement the index
  this.index--;
  //return variable with first index
  return first;
};

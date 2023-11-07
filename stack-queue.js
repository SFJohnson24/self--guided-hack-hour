/**
 *
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 *
 */

class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }
  push = function (value) {
    this.stack[this.length] = value;
    this.length++;
  };
  pop = function () {
    if (this.length === 0) {
      return;
    }
    const last = this.length - 1;
    const { [last]: removedEntry, ...rest } = { ...this.stack };
    //delete this.stack[this.index-1];
    this.stack = rest;
    this.length--;
    return removedEntry;
  };
}

/*
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 *
 * DO NOT USE NATIVE JS METHODS
 *
 */
class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
}
Queue.prototype.enqueue = function (value) {
  this.s1.push(value);
};

Queue.prototype.dequeue = function () {
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
};
//because s2 will not be empty, no more elements will be moved over, you will dequeue what has been transferred from first call to dequeue if stack 1 had several elements moved to stack 2

module.exports = { Stack, Queue };

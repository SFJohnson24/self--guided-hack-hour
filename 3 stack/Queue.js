// do not use any native array methods
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
}

//

// const test = new Queue();
// test.enqueue("sam");
// test.enqueue("gabby");
// test.enqueue("Praise");
// test.enqueue("sam2");
// console.log(test);
// console.log(test.dequeue());
// console.log(test);
// console.log(test.dequeue());
// console.log(test);

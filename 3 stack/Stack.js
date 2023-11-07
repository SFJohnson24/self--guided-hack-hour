// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  //add key:value pair with index as key value as value
  this.storage[this.index] = value;
  //increment index by 1
  this.index++;
};
//removes last stack frame
Stack.prototype.pop = function () {
  //check is stack is empty, return if nothing
  if (this.index === 0) {
    return;
  } else {
    //variable to last index in storage
    const last = this.storage[this.index - 1];
    //delete last index
    delete this.storage[this.index - 1];
    //decrement the index
    this.index--;
    //return variable
    return last;
  }
};

//let ourStack = new Stack();
// ourStack.push("s");
// ourStack.push("g");
// console.log(ourStack);
// console.log(ourStack.pop());

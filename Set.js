function MySet() {
  this.items = {};
}

// adds an object to the set
// does not add an object to the set if object is already present
MySet.prototype.add = function (value) {
  if (!this.contains(value)) {
    this.items[value] = true;
  }
};

// returns true if the value is contained in the set
MySet.prototype.contains = function (value) {
  return this.items.hasOwnProperty(value);
};

// removes value from the set if present
MySet.prototype.remove = function (value) {
  if (this.contains(value)) {
    delete this.items[value];
  }
};

// Example usage
const set = new MySet();
set.add(1);
set.add(2);
set.add(3);

console.log(set.contains(2));

function HashTable() {
  this.SIZE = 16;

  // the array will be instantiated as [undefined, undefined....]
  // pop() and push() shouldn't be used on the storage
  this.storage = new Array(this.SIZE);
}

// set stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function (key, value) {
  //run the key through hash function to get cell in the array we are putting value into
  const cell = hashCode(key, this.SIZE);
  //if we already have a value in that cell, store the key matched to value
  if (this.storage[cell]) {
    this.storage[cell][key] = value;
    //otherwise make an object in that cell, and then store the value at [key]
  } else {
    this.storage[cell] = {};
    this.storage[cell][key] = value;
  }
};

// return a previously stored value
HashTable.prototype.get = function (key) {
  //run key through the hashcode fx
  const cell = hashCode(key, this.SIZE);
  //retrieve value at index from hashCode
  return this.storage[cell][key];
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function (key) {
  //run key through the hashcode fx
  const cell = hashCode(key, this.SIZE);
  //set a variable to the value at our cell
  const removeItem = this.storage[cell][key];
  //set the value of the array at that index to undef
  delete this.storage[cell][key];
  return removeItem;
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size) {
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = (hash << 5) - hash + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size;
}

console.log(hashCode('key', 16));
let test = new HashTable();
test.set('key', 'value');
console.log(test);

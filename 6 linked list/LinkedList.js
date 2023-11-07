//Constructor function that creates a linked list
function LinkedList() {
  this.head = null;
  this.tail = null;

  // if (arguments.length > 0) {
  //   this.head = new Node(arguments[0]);
  //   let current = this.head;

  //   for (let i = 1; i < arguments.length; i++) {
  //     current.next = new Node(arguments[i]);
  //     current = current.next;
  //   }

  //   this.tail = current;
  // }
}

//Constructor function that creates a new node
function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function (value) {
  //create new Node
  const newNode = new Node(value);
  //check if head exists
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    //point the tail.next to current node
    this.tail.next = newNode;
    //set current node to the tail
    this.tail = newNode;
  }
  //if no tail property, will have to traverse using while loop and pointer to the next node looking for null value, once reach the last node, set curr.next to newNode
};

LinkedList.prototype.contains = function (value) {
  //start at head
  let current = this.head;
  //iterate through list checking the value at each node whether its equal to our target
  while (current !== null) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }
  //if we reach end and don't have it, return false
  return false;
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {
  if (position < 0) {
    throw new Error('Insert position cannot be negative');
  }

  if (position === 0) {
    this.addToHead(value);
    return;
  }
  //make new node to be added
  const newNode = new Node(value);
  //pointers so we can see upstream
  let current = this.head;
  let prev = null;
  let currentPosition = 0;

  //iterate through the list, changing prev to current (node upstream), and current to .next, upping position counter
  //currentPostiong<position will run one last time to make currentPos=position
  while (current !== null && currentPosition < position) {
    prev = current;
    current = current.next;
    currentPosition++;
  }

  if (currentPosition < position) {
    throw new Error('Position is beyond the length of the list.');
  }
  //when we reach the position, we change pointers to add to chain,
  //our previous (position-1) points to our new node
  //newNode.next points to current
  prev.next = newNode;
  newNode.next = current;

  //if current is null, our new node is the tail, we need to update tail feature of LL
  if (current === null) {
    this.tail = newNode;
  }
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) {
  if (!this.head) {
    return;
  }

  if (this.head.value === value) {
    //second node is the new head as we are removing the head
    this.head = this.head.next;
    //if head.next is null, was a 1 node LL, so tail is now also null
    if (this.head === null) {
      this.tail = null;
    }
    return;
  }

  let current = this.head;
  let prev = null;

  while (current !== null) {
    if (current.value === value) {
      prev.next = current.next;
      //rearrange tail to previous if we are deleting the last node
      if (current.next === null) {
        this.tail = prev;
      }
      return;
    }
    prev = current;
    current = current.next;
  }
  //if we get through this while loop, means value is not there so return error
  throw new Error('Value is not contained in list.');
};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {
  if (!this.head || position < 0) {
    return;
  }

  if (position === 0) {
    this.head = this.head.next;
    //remove the head, if the next node was blank, was a 1 node LL, tail is null as well
    if (this.head === null) {
      this.tail = null;
    }
    return;
  }

  let current = this.head;
  let prev = null;
  let currentPosition = 0;

  while (current !== null && currentPosition < position) {
    prev = current;
    current = current.next;
    currentPosition++;
  }

  if (currentPosition < position || current === null) {
    return; // Position is beyond the length of the list
  }
  // we are at the node to be removed, stitch it out of the linked list
  prev.next = current.next;
  if (current.next === null) {
    this.tail = prev;
  }
};

//reverse a LL
LinkedList.prototype.reverse = function () {
  // Empty list or one node LL cant be reversed
  if (!this.head || !this.head.next) {
    return;
  }
  //when reversing we keep track of next as well as prev and current
  let prev = null;
  let current = this.head;
  let next = null;

  //reverse via movement of next to current.next and then redirecting current.next to previous
  //then you can increment current and previous to current and next respectively
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Swap head and tail pointers to reflect the reversed list
  this.tail = this.head;
  this.head = prev;
};

// Constructor function that creates a doubly linked list
function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

// Constructor function that creates a new doubly linked node
function DoublyNode(val) {
  this.value = val;
  this.prev = null;
  this.next = null;
}

// Adds node to the end of the doubly linked list
DoublyLinkedList.prototype.push = function (value) {
  // Create new DoublyNode
  const newNode = new DoublyNode(value);
  // Check if head exists
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    // Point the tail's next to the new node
    this.tail.next = newNode;
    // Point the new node's prev to the current tail
    newNode.prev = this.tail;
    // Set the new node as the new tail
    this.tail = newNode;
  }
};

// Contains function remains the same

// Bonus
// Adds node to the beginning of the doubly linked list
DoublyLinkedList.prototype.addToHead = function (value) {
  const newNode = new DoublyNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
};

// Extra Bonus
// Insert an item at the position specified in the doubly linked list
DoublyLinkedList.prototype.insert = function (value, position) {
  if (position < 0) {
    throw new Error("Position cannot be negative.");
  }

  if (position === 0) {
    this.addToHead(value);
    return;
  }

  const newNode = new DoublyNode(value);
  let current = this.head;
  let currentPosition = 0;

  while (current !== null && currentPosition < position) {
    current = current.next;
    currentPosition++;
  }

  if (currentPosition < position) {
    throw new Error("Position is beyond the length of the list.");
  }

  newNode.prev = current.prev;
  newNode.next = current;

  if (current.prev) {
    current.prev.next = newNode;
  } else {
    this.head = newNode;
  }

  current.prev = newNode;

  if (current === null) {
    this.tail = newNode;
  }
};

// Extra Bonus
// Remove the first occurrence of value from the doubly linked list
DoublyLinkedList.prototype.removeItem = function (value) {
  if (!this.head) {
    return;
  }

  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }

      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }

      return;
    }

    current = current.next;
  }
};

// Extra Bonus
// Remove element at the specified position in the doubly linked list
DoublyLinkedList.prototype.removePosition = function (position) {
  if (!this.head || position < 0) {
    return;
  }

  if (position === 0) {
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return;
  }

  let current = this.head;
  let currentPosition = 0;

  while (current !== null && currentPosition < position) {
    current = current.next;
    currentPosition++;
  }

  if (currentPosition < position || current === null) {
    return; // Position is beyond the length of the list.
  }

  if (current.prev) {
    current.prev.next = current.next;
  } else {
    this.head = current.next;
  }

  if (current.next) {
    current.next.prev = current.prev;
  } else {
    this.tail = current.prev;
  }
};

// Bonus
// Reverse the doubly linked list
DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  while (current !== null) {
    // Swap next and prev pointers for current node
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;

    // Move to the next node in the original list
    current = temp;
  }

  // Swap head and tail pointers to reflect the reversed list
  const tempHead = this.head;
  this.head = this.tail;
  this.tail = tempHead;
};

// Extra Bonus
// Store items so that the item of highest priority can be efficiently removed
function PriorityQueue() {
  this.items = [];
}

PriorityQueue.prototype.enqueue = function (item, priority) {
  this.items.push({ item, priority });
  this.items.sort((a, b) => a.priority - b.priority);
};

// removes and returns the item with highest priority
PriorityQueue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return null;
  }
  return this.items.shift().item;
};

// Check if the priority queue is empty
PriorityQueue.prototype.isEmpty = function () {
  return this.items.length === 0;
};

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 3);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 2);

console.log(priorityQueue.dequeue());

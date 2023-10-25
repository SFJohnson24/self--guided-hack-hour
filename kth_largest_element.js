/*
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4


*/

//sort  Time Complexity: O(Nlog⁡N) quasilinear;  Space Complexity: O(1)
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

//minheap  Time Complexity: O(nlog⁡k) - This notation represents an algorithm's time complexity that grows approximately linearly with the input size (n) and logarithmically with another parameter (k). In most cases, k is smaller than n. This complexity commonly arises in algorithms involving data structures like heaps or priority queues with a limited size (k), where the operations are typically log k.  The important thing to note is that if k is a constant or a value that does not grow significantly with n, then O(n log k) can be considered faster than O(n log n) because the logarithm term's growth is slower when the base is smaller.
// Space Complexity: O(k)

class MinHeap {
  constructor() {
    this.heap = [];
  }
  //adds new value to heap
  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  //removes the min element of heap (root of the heap)
  pop() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  //returns min element of heap without removing it
  peek() {
    return this.heap[0];
  }
  //This method is used after inserting a new element. It starts from the last element in the heap and compares it with its parent. If the parent is greater, the two elements are swapped. This process continues until the element reaches a position where its parent is smaller than or equal to it.
  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }
  //this method is used after extracting the root element. It starts from the root and compares it with its children. If any child is smaller, it is swapped with the root. This process continues down the heap until the element reaches a position where its children are greater than or equal to it.
  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}
var findKthLargest = function (nums, k) {
  let heap = new MinHeap();
  for (let i = 0; i < k; i++) {
    heap.push(nums[i]);
  }
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.peek()) {
      heap.pop();
      heap.push(nums[i]);
    }
  }
  return heap.peek();
};

/*
quickselect -- The QuickSelect algorithm is an efficient method to find the kkk-th smallest (or largest) element in an unordered list without sorting the entire list. It works similarly to the QuickSort algorithm but only recurses into one half of the data.
https://www.geeksforgeeks.org/quickselect-algorithm/ 
https://medium.com/nerd-for-tech/quick-select-algorithm-17ac146b6218
Time Complexity:

    Best and Average Case: O(N)

    Worst Case: O(N^2)

    The average performance is linear. However, in the worst case (very rare, especially with randomized pivot), the algorithm can degrade to O(N2)O(N^2)O(N2).

Space Complexity: O(1)

    The space used is constant. The algorithm modifies the original list in place and doesn't utilize any significant additional data structures. The recursive stack calls (in the worst case) are also bounded by the depth of the list, making it O(log⁡N)O(\log N)O(logN), but this is typically considered as O(1)O(1)O(1) space complexity in QuickSelect.
*/

var findKthLargest = function (nums, k) {
  const partition = (left, right, pivotIndex) => {
    const pivot = nums[pivotIndex];
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    let storedIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] < pivot) {
        [nums[storedIndex], nums[i]] = [nums[i], nums[storedIndex]];
        storedIndex++;
      }
    }
    [nums[right], nums[storedIndex]] = [nums[storedIndex], nums[right]];
    return storedIndex;
  };

  let left = 0,
    right = nums.length - 1;
  while (true) {
    const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
    const newPivotIndex = partition(left, right, pivotIndex);
    if (newPivotIndex === nums.length - k) {
      return nums[newPivotIndex];
    } else if (newPivotIndex > nums.length - k) {
      right = newPivotIndex - 1;
    } else {
      left = newPivotIndex + 1;
    }
  }
};

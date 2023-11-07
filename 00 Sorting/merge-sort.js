/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

  n log n time complexity - recursively broken up into halves -- repetitive division gives logn, merge gives the linear complexity
  space - linear

*/

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  let left = mergSort(array.slice(0, mid));
  let right = mergSort(array.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  //dump out the last value either in left/right with the sorted array
  return [...sortedArr, ...left, ...right];
}

module.exports = { mergeSort };

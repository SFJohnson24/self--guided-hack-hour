const { arrayBuffer } = require('stream/consumers');

/*

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

We will sort the array using a strategy called selection sort, which works as
follows. First, put the smallest number in the array at position 0. Then, put
the second-smallest number in the array at position 1. Then, put the
third-smallest number in the array at position 2 etc. After going through the
whole array, the array will end up being sorted.

*/
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the remaining portion
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with current
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
};

/*

Extension:

Given an array of integers, sort the array in-place and return the array.
Do not create a new array in memory. Instead, modify the array as given. Do not
use the array sort method built in to the array prototype while solving the
problem. The integers should be in ascending order from left to right.

For this extension, we will use a strategy called insertion sort, which works as
follows. Imagine that the first k - 1 numbers of the array are in ascending
order. We take the kth number and insert it into the correct position amongst
the k - 1 numbers such that now, the first k numbers of the array are in
ascending order. In other words:

The first value in the array is considered to be already fine.
The second value is either placed before/after the first value.
The third value is inserted in the correct position amongst the first two values.
The fourth value is inserted in the correct position amongst the first three values.
etc.

*/

const insertionSort = (array) => {
  const length = array.length;
  //start 1 element in, first is considered already sorted
  for (let i = 1; i < length; i++) {
    const currentElement = array[i];
    let j = i - 1;
    console.log(currentElement);

    // Move elements of the sorted part of the array that are greater than the current element to the right by one position
    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      //console.log(array)
      j--;
    }
    // Insert the current element into its correct position
    array[j + 1] = currentElement;
    //console.log(array)
  }

  return array;
};

let arr = [3, 5, 1, 2];
console.log(insertionSort(arr));

module.exports = { selectionSort, insertionSort };

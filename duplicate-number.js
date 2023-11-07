/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/

const duplicateNumber = (array) => {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return array[i];
    }
  }
};
//console.log(duplicateNumber([1,5,4,3,6,2,4,7]))

/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/

const duplicateNumberAdvanced = (array) => {
  // let slow = array[0];
  // let fast = array[0];
  // // Step 1: Find the meeting point of slow and fast pointers
  // while (true) {
  //   slow = array[slow];
  //   fast = array[array[fast]];
  //   if (slow === fast) {
  //     break;
  //   }
  // }
  // // Step 2: Find the start of the cycle
  // slow = array[0];
  // while (slow !== fast) {
  //   slow = array[slow];
  //   fast = array[fast];
  // }
  // // Step 3: Find the duplicate
  // return slow;

  //store length = n
  const length = array.length - 1;
  //figure out k
  //get sum of all elements
  const realSum = array.reduce((a, b) => a + b);
  //store min of the spread, min is k
  const min = Math.min(...array);
  //expectedSum of array with no duplicates - triangle number formula
  let expectedSum = (length ** 2 + length) / 2;
  //iteratively add the length to expected sum accounting for min
  for (let i = 0; i < min - 1; i++) {
    expectedSum += length;
  }
  return realSum - expectedSum;
};
console.log(duplicateNumberAdvanced([3, 4, 7, 6, 8, 5, 4, 9, 10]));

module.exports = { duplicateNumber, duplicateNumberAdvanced };

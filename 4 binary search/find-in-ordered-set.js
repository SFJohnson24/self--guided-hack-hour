/*
Write a function findInOrderedSet that determines if a target value exists within an array of numbers.

Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?

ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/

const findInOrderedSet = (array, target) => {
  if (array.length === 0) {
    return false;
  }
  if (array.length === 1) {
    return array[0] === target;
  }
  let mid = Math.floor(array.length / 2);
  if (target === array[mid]) {
    return true;
  } else if (array[mid] > target) {
    let smallHalf = array.splice(0, mid);
    return findInOrderedSet(smallHalf, target);
  } else {
    let bigHalf = array.splice(mid);
    return findInOrderedSet(bigHalf, target);
  }
};
// const nums = [-3, 0, 8, 13, 37];
// console.log(findInOrderedSet(nums, 13));
//O(logN) time - array of 2 takes 1 comparison, arr of 4 takes 2, arr of 8 takes 3, arr of 16 takes 4 comparisons => log
//O(1) space - only 1 callstack element
//cant splice as this is O(n) -- need to just look at different array parts
/*
Extension:
Write a function findIn2dMatrix that determines if a target value exists within a two dimensional matrix.
The matrix has the following properties:
  - Each subarray in the matrix contains numbers sorted in ascending order
  - The *last* element in each subarray is smaller than than the *first* element in each following subarray  
ex:
const matrix = [
  [-3, -1,  2,  4,  5],
  [ 6,  7,  8, 13, 37],
  [41, 49, 50, 61, 75]
];
findIn2dMatrix(matrix, 13); -> true
findIn2dMatrix(matrix, 42); -> false
*/

const findIn2dMatrix = (matrix, target) => {
  let i = matrix.length; //# of rows
  let j = matrix[0].length; //# of columns
  let left = 0,
    right = i * j - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mid_val = matrix[Math.floor(mid / j)][mid % j]; //middle index / column #

    if (mid_val === target) return true;
    else if (mid_val < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const matrix = [
  [-3, -1, 2, 4, 5],
  [6, 7, 8, 13, 37],
  [41, 49, 50, 61, 75],
];
console.log(findIn2dMatrix(matrix, 13));
console.log(findIn2dMatrix(matrix, 42));

module.exports = { findInOrderedSet, findIn2dMatrix };

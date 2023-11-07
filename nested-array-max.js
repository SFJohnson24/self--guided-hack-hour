/* 
Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.

Ex:

const arrFlat = [1, 3, 10, 6];
nestedArrMax(arrFlat);
-> 10

const arrNested = [1, [3, [10], 6]];
nestedArrMax(arrNested);
-> 10

*/
const nestedArrMax = (arr) => {
  if (arr.length === 0) {
    return;
  }
  const results = [];
  const process = function (array) {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        process(element);
      } else {
        results.push(element);
      }
    });
    return results;
  };
  process(arr);
  //console.log(results)
  return Math.max(...results);
  //need to flatten
  //once recursively flat, compare all
};

// const arrNested = [1, [3, [10], 6]];
// console.log(nestedArrMax(arrNested));

/*

Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.

The original array is considered to be at depth 1, any inner array is depth 2, etc.

Ex:

const arrNested = [1, [3, [10], 6]];
nestedArrMaxLevel(arrNested, 1);
-> 1

nestedArrMaxLevel(arrNested, 2);
-> 6

nestedArrMaxLevel(arrNested, 3);
-> 10

*/

const nestedArrMaxLevel = (arr, level) => {
  if (arr.length === 0) {
    return;
  }
  const results = [];
  const process = function (array, level) {
    if (level === 0) {
      return results;
    }
    array.forEach((element) => {
      if (Array.isArray(element)) {
        process(element, --level);
      } else {
        results.push(element);
      }
    });
  };
  process(arr, level);
  let max = -1;
  for (let i = 0; i < results.length; i++) {
    if (Array.isArray(results[i])) {
      continue;
    } else {
      max = Math.max(results[i], max);
    }
  }
  return max;
};
//const arrNested = [1, [3, [10], 6]];
//console.log(nestedArrMaxLevel(arrNested, 3));

module.exports = { nestedArrMax, nestedArrMaxLevel };

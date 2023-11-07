/*
Write a function called commonElements that takes in any number of arrays in the 
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input. 
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.

ex: 
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/

const commonElements = (...args) => {
  let numArgs = args.length;
  if (numArgs === 0 || numArgs === 1) {
    return;
  }
  let cache = new Map();
  let result = [];
  args = args.flat(Infinity);
  for (let i = 0; i < args.length; i++) {
    console.log(cache);
    if (!cache.has(args[i])) {
      cache.set(args[i], 1);
    } else {
      let value = cache.get(args[i]) + 1;
      cache.set(args[i], value);
      if (value == numArgs) {
        result.push(args[i]);
      }
    }
  }
  return result;
};

arr1 = [2, 10, "cat", 3, 99, 2000, "dog", "lion"];
arr2 = [3, 7, 2, 2000, 1, "dog", "cat"];
arr3 = [2, 100, 2000, "dog", 3, "lion"];
//console.log(commonElements(arr1, arr2, arr3));

/*
** Extension **
Refactor your function to have O(n) time complexity.
*/
const commonElementsOptimized = (...args) => {
  const commonElements = (...args) => {
    let numArgs = args.length;
    let cache = new Map();
    let result = [];
    args = args.flat(Infinity);
    for (let i = 0; i < args.length; i++) {
      console.log(cache);
      if (!cache.has(args[i])) {
        cache.set(args[i], 1);
      } else {
        let value = cache.get(args[i]) + 1;
        cache.set(args[i], value);
        if (value == numArgs) {
          result.push(args[i]);
        }
      }
    }
    return result;
  };
};

module.exports = { commonElements, commonElementsOptimized };

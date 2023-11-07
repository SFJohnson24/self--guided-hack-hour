/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = (array) => {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    if (result[array[i]]) {
      result[array[i]] += 1;
    } else {
      result[array[i]] = 1;
    }
  }
  let mode = -1;
  let bigFreq = -1;
  Object.keys(result).forEach((key) => {
    if (result[key] > bigFreq) {
      mode = key;
      bigFreq = result[key];
    }
    if (result[key] === bigFreq && key > mode) {
      mode = key;
      biggFreq = result[key];
    }
  });

  return mode;
};

console.log(mode([3, 2, 4, 3]));
console.log(mode([7, 5, 8, 8, 2, 5]));

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = (array) => {};

module.exports = { mode, modeNested };

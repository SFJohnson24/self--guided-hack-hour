/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  if (array.length === 0) {
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
  process(array);
  let count = 0;
  results.forEach((e) => {
    if (e === keyword) {
      count++;
    }
  });
  return count;
};

//solution use JSON.stringify
// const keywordCount = (array, keyword) => {
//   //convert nested array into a string
//   const string = JSON.stringify(array);
//   //make a regex with the global flag from the keyword
//   const regex = new RegExp(keyword, 'g')
//   //string.match returns an array with every instance of a match to the regex, needs to use a regex previous line.
//   let res = string.match(regex);
//   //if it's null keyword wasn't found
//   if(!res) return 0;
//   //length of array is number of matches
//   return res.length;
// };

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi'));

// time O(n) and space O(n+d) - n is number of array elements and d is degree of nesting

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = (array) => {
  if (array.length === 0) {
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
  process(array);
  let count = new Map();
  for (let i = 0; i < results.length; i++) {
    if (!count.has(result[i])) {
      count.set(result[i], 1);
    } else {
      count.set(result[i], count.get(result[i]) + 1);
    }
  }
  let max = Math.max(...count.values);
  let result = [...count.entries()].reduce((a, e) => (e[1] > a[1] ? e : a));
  return result;
};

module.exports = { keywordCount, keywordMode };

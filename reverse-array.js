const { arrayBuffer } = require('stream/consumers');

/*
Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.
*/
const reverseArray = (array) => {
  if (array.length < 2) return array;
  for (let i = array.length - 1; i > 0; i--) {
    let removed = array.splice(array.length - 1, 1);
    array.splice(array.length - i, 0, removed[0]);
  }
  return array;
};

//could also do 2 pointers
//in for loop
// [arr[0], arr[array.length]] = [arr[array.length], arr[0]];

//console.log(reverseArray([5, 4, 3, 2, 1]));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = (sentence) => {
  let str = sentence.split(' ');
  let s = '';
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i] != '' && str[i] != ' ') s += str[i] + ' ';
  return s.trim();
};
console.log(reverseSentence('hello people of the world'));

module.exports = { reverseArray, reverseSentence };

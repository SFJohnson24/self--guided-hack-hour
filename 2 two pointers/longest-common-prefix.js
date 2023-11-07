/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)
ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"
longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)
*/


//not quadratic time--not same iterable for the two loops; closer to O(n)--especially in best case when there is no prefix common
const longestCommonPrefix = (strs) => {
  if (strs.length < 1) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let pointer = 0;
    while (
      pointer < prefix.length &&
      pointer < strs[i].length &&
      strs[i][pointer] === prefix[pointer]
    ) {
      pointer++;
    }
    prefix = prefix.slice(0, pointer);
    if (prefix === '') {
      return '';
    }
  }

  return prefix;
};

module.exports = { longestCommonPrefix };

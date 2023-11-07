/*
Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/
const substringNonrepeating = (str) => {
  if (str.length === 0) {
    return 0;
  }

  return findLongestSubstring(str);
};
const findLongestSubstring = (str, start = 0, end = 0, maxLength = 0) => {
  if (end === str.length) {
    return maxLength;
  }
  const char = str[end];

  // is character is in the current substring
  const charIndex = str.substring(start, end).indexOf(char);

  if (charIndex === -1) {
    // If not in substring, expand
    return findLongestSubstring(
      str,
      start,
      end + 1,
      Math.max(maxLength, end - start + 1)
    );
  } else {
    // If the character is in the current substring, start a new substring after the character that was repeated--for lolk, when it hits the second l, it will move to the 0 as charIndex is the index of the first 'l'
    return findLongestSubstring(str, start + charIndex + 1, end, maxLength);
  }
};

//console.log(substringNonrepeating('llkolsd'))

module.exports = { substringNonrepeating };

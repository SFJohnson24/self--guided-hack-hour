/*
https://leetcode.com/problems/sort-colors/description/
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

Constraints:

    n == nums.length
    1 <= n <= 300
    nums[i] is either 0, 1, or 2.


Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/
//linear time, constant space

var sortColors = function (nums) {
    let i = 0;
    let left = 0,
      right = nums.length - 1;
  
    while (i <= right && left < right) {
      if (nums[i] === 0) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
        left++;
        i++;
      } else if (nums[i] === 2) {
        [nums[i], nums[right]] = [nums[right], nums[i]];
        right--;
      } else {
        i++;
      }
    }
  };
  //The algorithm uses three pointers: left, i, and right. The left pointer keeps track of the boundary of 0s, the right pointer keeps track of the boundary of 2s, and i is the current index being examined.

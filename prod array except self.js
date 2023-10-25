// 238. Product of Array Except Self
// Medium
// 20.2K
// 1.2K
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

//     2 <= nums.length <= 105
//     -30 <= nums[i] <= 30
//     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//https://leetcode.com/problems/product-of-array-except-self/

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

var productExceptSelf = function (nums) {
  let pre = new Array(nums.length).fill(1);
  let post = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    //pre is the before, start at 1 since no pre for index 0, multiple the number before it which will be all the left numbers, times nums[i-1] which is the 1 extra to the left
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  //[1,2,3,4]
  for (let i = nums.length - 2; i > 0; i--) {
    post[i] = post[i + 1] * nums[i + 1];
  }
  let result = [];

  for (let i = 0; i < pre.length; i++) {
    result.push(pre[i] * post[i]);
  }
  return result;
};
//O(1) space
//O(n) time

// let preFix = new Array(nums.length).fill(1)
// let postFix = new Array(nums.length).fill(1)

// // [ 1, 2, 6, 24 ]
// let result = new Array(nums.length).fill(1)

// for (let i = 1; i <= nums.length; i++){
//   preFix[i] = preFix[i - 1] * nums[i - 1]
// }

// //postfix here

//   let result = []

//   for (let i = 0; i < preFix.length - 1; i++){

//     result.push(preFix[i] * postFix[i])

//   }
//   return result

// }

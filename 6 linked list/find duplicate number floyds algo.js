/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3


 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N * log(N)) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */

/* Time O(N * log(N)) | HeapSort Space O(1) | QuickSort Space O(log(N)) */
var findDuplicate = function(nums) {
    //technically violates the no mod to nums array clause
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) return nums[i];
    }
    return -1;
}

/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const duplicate = negativeMarking(nums);/* Time O(N) */

    restoreToPositiveNumbers(nums);         /* Time O(N) */

    return duplicate;
}

const negativeMarking = (nums) => {
    for (let i = 0; i < nums.length; i++) {/* Time O(N) */
        const curr = Math.abs(nums[i]);

        const isNegative = nums[curr] < 0;
        if (isNegative) return curr;

        nums[curr] *= -1;
    }

    return -1
}

const restoreToPositiveNumbers = (nums) => {
    for (let i = 0; i < nums.length; i++) {/* Time O(N) */
        nums[i] = Math.abs(nums[i]);
    }
}

/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums, start = 0) {
    const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

    const isSame = () => nums[start] === nums[nums[start]];
    while (!isSame()) {/* Time O(N) */
        swap(nums, start, nums[start]);
    }

    return nums[start];
}

/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time O(N) | Space O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    if (!nums.length) return -1

    let [ slow, fast ] = moveFast(nums);  /* Time O(N) */
    [ slow, fast ] = moveSlow(nums, slow, fast);/* Time O(N) */

    return slow;
};

const moveFast = (nums, start = 0) => {
    let [ slow, fast ] = [ nums[start], nums[nums[start]] ];

    const isSame = () => slow === fast;
    while (!isSame()) {                   /* Time O(N) */
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    fast = start;

    return [ slow, fast ];
}

const moveSlow = (nums, slow, fast) => {
    const isSame = () => slow === fast;
    while (!isSame()) {                 /* Time O(N) */
        slow = nums[slow];
        fast = nums[fast];
    }

    return [ slow, fast ];
}
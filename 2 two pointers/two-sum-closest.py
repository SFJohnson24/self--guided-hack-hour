"""Given an array nums of n integers and an integer target, find two integers in
nums such that the sum is closest to target. Return the sum of the two
integers. You may assume that each input would have exactly one solution, and
that the array will have at least two elements.
Example:
Given array nums [2, -2, 1] and target = 4.
The sum that is closet to the target is 3. (2 + 1 = 3).
Given array nums = [2, -3, -6, 7, 4] and target = 3.
The sum that is closest to the target is 4. (-3 + 7 = 4).
Given array nums = [3, 1, 4, 3] and target = 6.
The sum that is closest to the target is 6. (3 + 3 = 6).
Solve this problem using any strategy you would like: a naive solution is fine.

Extension:
The naive solution for this problem has O(n^2) time complexity. Can you come up
with a different solution with better time complexity? Hint: first sort the
array, which is O(n*log(n)) time, and see if you can post-process the array in
O(n) time."""
class Solution:
    def twoSumClosest(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        l = 0
        r = len(nums) - 1
        closestSum = math.inf

        while l < r:
            # sum and difference between sum and target
            sum = nums[l] + nums[r]
            diff = abs(sum - target)
            #if diff = 0, sum is target
            if diff == 0:
                return sum
            #change closest if diff closer than current closest
            if diff < abs(closestSum - target):
                closestSum = sum;
            # move pointers
            if sum < target:
                l += 1
            else:
                r -= 1
        return closestSum;
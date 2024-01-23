class Solution:
    def sortColors(self, nums: List[int]) -> None:
        i=0
        l, r = 0, len(nums-1)
        
        while i <= r and l < r:
            if nums[i] == 0:
                [nums[i], nums[l]] = [nums[l], nums[i]]
                l += 1
                i += 1
            elif nums[i] == 2:
                [nums[i], nums[r]] = [nums[r], nums[i]]
                r -= 1
            else:
                i += 1

"""
The algorithm uses three pointers: left, i, and right. The left pointer keeps track of the boundary of 0s, the right pointer keeps track of the boundary of 2s, and i is the current index being examined.
"""
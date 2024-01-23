class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        #i index, a value
        for i, a in enumerate(nums):
            # Skip positive integers as it is not possible to have a triplet sum to zero with a positive integer as first element as the other two will also be positive due to sorting
            if a > 0:
                break
            #duplicates skipped given condition of problem
            if i > 0 and a == nums[i - 1]:
                continue
            #init 2 pointers
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
                        
        return res
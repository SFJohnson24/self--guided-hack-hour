class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        Lset = set(nums)
        Smax = 0
        for num in Lset:
            if num-1 in Lset:
                continue
            currNum=num
            currMax=1
            while currNum+1 in Lset:
                currMax += 1
                currNum += 1
            Smax = max(Smax, currMax)
        return Smax
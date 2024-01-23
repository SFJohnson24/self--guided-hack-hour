class Solution:
    def maxArea(self, height: List[int]) -> int:
        #pointers
        l, r = 0, len(height) - 1
        res = 0

        while l < r:
            smallestSide = min(height[l], height[r])
            area = (r - l) * smallestSide
            if (area > res):
                res = area
            if (height[l] < height[r]):
                l += 1
            else:
                r -= 1
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[l] < height[r]:
                l += 1
            elif height[r] <= height[l]:
                r -= 1
            
        return res
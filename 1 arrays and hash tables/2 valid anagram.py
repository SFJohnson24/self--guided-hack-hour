class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        #we are only using a set in the for loop to look at each unique character.  can also just be idx in s but less optimized
        for idx in set(s):
            #check if s and t have the same number of occurrences of each letter
            if s.count(idx) != t.count(idx):
                return False
        return True
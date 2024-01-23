class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
#set
        maxL=0
        count=0
        subs = set()
        if len(s) == 0:
            return 0
        if len(s) == 1:
            return 1
        for i in range(len(s)):
            if s[i] in subs:
                while s[count] != s[i]:
                    subs.remove(s[count])
                    count += 1
                count += 1
            subs.add(s[i])
            maxL = max(maxL, i - count + 1)
        return maxL

#dict

    max_length = 0
    start = 0
    char_index = {}

    for i in range(len(s)):
        if s[i] in char_index and char_index[s[i]] >= start:
            start = char_index[s[i]] + 1

        char_index[s[i]] = i
        max_length = max(max_length, i - start + 1)

    return max_length    
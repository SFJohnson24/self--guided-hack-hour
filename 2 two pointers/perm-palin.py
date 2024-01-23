from collections import Counter

class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        # Count the occurrences of each character in the string
        char_count = Counter(s)

        # Calculate the number of characters that appear an odd number of times
        odd_count = sum(value % 2 for value in char_count.values())
        return odd_count < 2
"""
A string can be permuted into a palindrome if it has at most one character 
with an odd occurrence count (which would be the middle character)
"""

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
            anagram_groups = {}
            for word in strs:
                #sort words lexographically, then join resultant array without spaces
                group_key = ''.join(sorted(word))
                if group_key not in anagram_groups:
                    anagram_groups[group_key] = [word]
                else:
                # .extend() adds to end of iterable if not in object
                    anagram_groups[group_key].extend([word])
            return anagram_groups.values()
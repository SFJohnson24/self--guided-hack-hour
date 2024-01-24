
class Solution:
    def isValid(self, s: str) -> bool:
        Map = {")": "(", "]": "[", "}": "{"}
        stack = []

        for char in s:
            #if we hit a closed, the last paren in stack needs to be the open or if stack is empty => false
            if char in Map:
                if stack and stack[-1] == Map[char]:
                    stack.pop()
                else:
                    return False
            # opened parens, add to stack
            else:
                stack.append(char)
        #return true if no stack, false if any parens left
        return not stack

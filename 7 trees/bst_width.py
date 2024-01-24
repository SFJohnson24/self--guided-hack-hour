class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            nonlocal diameter
            if not node:
                return 0

            left = dfs(node.left)
            right = dfs(node.right)

            # Update diameter at every node
            diameter = max(diameter, left + right)

            # Update the largest number of edges so far
            return 1 + max(left, right)

        diameter = 0
        dfs(root)
        return diameter







class Solution:
    def __init__(self):
	    self.diameter = 0 
	
    def depth(self, node: Optional[TreeNode]) -> int:
        left = self.depth(node.left) if node.left else 0
        right = self.depth(node.right) if node.right else 0

        # Calculate diameter
        if left + right > self.diameter:
            self.diameter = left + right
        return 1 + (left if left > right else right)
    
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        self.depth(root)
        return self.diameter
"""
O(n) time
O(n) space
"""
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        q = []
    #initialize with root
        if root:
            q.append(root)
    #while queue is non-empty
        while q:
            level = []
            for i in range(len(q)):
                node = q.pop(0)
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(level)
        return res
  
#could queue instead of popleft()  
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        #result array
            res = []
        #queue is collections.deque
            q = collections.deque()
        #initialize with root
            if root:
                q.append(root)
        #while queue is non-empty
            while q:
                level = []
                for i in range(len(q)):
                    node = q.popleft()
                    level.append(node.val)
                    if node.left:
                        q.append(node.left)
                    if node.right:
                        q.append(node.right)
                res.append(level)
            return res
        

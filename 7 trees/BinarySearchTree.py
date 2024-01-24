class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None

    def add(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BinarySearchTree(value)
            else:
                self.left.add(value)
        else:
            if value > self.value:
                if self.right is None:
                    self.right = BinarySearchTree(value)
                else:
                    self.right.add(value)

    def contains(self, value):
        if value == self.value:
            return True
        if value < self.value:
            if self.left is None:
                return False
            else:
                return self.left.contains(value)
        elif value > self.value:
            if self.right is None:
                return False
            else:
                return self.right.contains(value)
    
    def min(self):
        if self.left:
            return self.left.min()
        return self.value

    def max(self):
        if self.right:
            return self.right.max()
        return self.value

    def height(self):
        if self.left is None and self.right is None:
            return 0
        left_height = self.left.height() if self.left else 0
        right_height = self.right.height() if self.right else 0
        return 1 + max(left_height, right_height)

    def remove(self, item):
        if self.value is None:
            return
        if self.value == item:
            if self.left is None:
                return self.right
            elif self.right is None:
                return self.left
            else:
                temp_node = self._smallest_node(self.right)
                self.value = temp_node
                self.right = self.right.remove(temp_node)
                return self.value
        elif item < self.value:
            if self.left:
                self.left = self.left.remove(item)
        else:
            if self.right:
                self.right = self.right.remove(item)

    def _smallest_node(self, node):
        while node.left:
            node = node.left
        return node.value


def bst_preorder(node, callback):
    if node:
        callback(node.value)
        bst_preorder(node.left, callback)
        bst_preorder(node.right, callback)

def bst_inorder(node):
    if node:
        bst_inorder(node.left, callback)
        callback(node.value)
        bst_inorder(node.right, callback)

def bst_postorder(node):
    if node:
        bst_postorder(node.left, callback)
        bst_postorder(node.right, callback)
        callback(node.value)


def breadth_first(self, callback):
    queue = [self]
    while queue:
        curr_node = queue[0]
        if curr_node.left:
            queue.append(curr_node.left)
        if curr_node.right:
            queue.append(curr_node.right)
        callback(queue.pop(0).value)


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def valid_bst(tree):
    def helper(node, min_val, max_val):
        if not node:
            return True
        if node.value <= min_val or node.value >= max_val:
            return False
        return helper(node.left, min_val, node.value) and helper(node.right, node.value, max_val)

    return helper(tree, float('-inf'), float('inf'))


def balance_bst(root):
    values = _to_array(root)
    return _to_bst(values)


def _to_array(node):
    if not node:
        return []
    return _to_array(node.left) + [node.value] + _to_array(node.right)


def _to_bst(arr):
    if not arr:
        return None
    if len(arr) == 1:
        return BinarySearchTree(arr[0])
    mid = len(arr) // 2
    left = _to_bst(arr[:mid])
    right = _to_bst(arr[mid+1:])
    return BinarySearchTree(arr[mid], left, right)


# Example usage:
# test = BinarySearchTree(5)
# test.add(2)
# test.add(3)
# test.add(7)
# print(test.contains(4))
# print(test.contains(2))
# test.depth_first_pre(callback_function)
# test.depth_first_in(callback_function)
# test.depth_first_post(callback_function)
# test.breadth_first(callback_function)
# print(test.min())
# print(test.max())
# print(test.height())
# test.remove(item_to_remove)
# tree = BinaryTree(5)
# tree.left.left = BinaryTree(4)
# print(valid_bst(tree))
# balanced_tree = balance_bst(tree)

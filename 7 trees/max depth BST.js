function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
/*
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/
const maxDepth = function(root) {
  if (root === null) {
     return 0;
   }
 
   const leftHeight = maxDepth(root.left);
   const rightHeight = maxDepth(root.right);
 
   return 1 + Math.max(leftHeight, rightHeight);
 };
/*
Find the tallest height of a binary search tree.
Ex. the tallest height of:
     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8
is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.
*/
const maxHeight = function(root) {
  if (root === null) {
     return -1;
   }
 
   const leftHeight = maxHeight(root.left);
   const rightHeight = maxHeight(root.right);
 
   return 1 + Math.max(leftHeight, rightHeight);
 };

/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = (tree) => {
  const isBalanced = (tree) => {
    if (tree === null) {
      return true;
    }
    const leftHeight = bstHeight(tree.left);
    const rightHeight = bstHeight(tree.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    return isBalanced(tree.left) && isBalanced(tree.right);
  };

  if (tree === null) {
    return true;
  }
  if (!isBalanced(tree)) {
    return false;
  }
  return superbalanced(tree.left) && superbalanced(tree.right);
};

module.exports = { BinarySearchTree, bstHeight, superbalanced };

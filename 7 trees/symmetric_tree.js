/*
given a binary tree root, check if it is symmetrical around its center (a mirror of iteself)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//helper function
areSymmetric = function (root1, root2) {
  //break conditions
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null){
    return false
  }
   if (root1.val !== root2.val) {
    return false;
  } 
    return areSymmetric(root1.left, root2.right) && areSymmetric(root1.right, root2.left)
  }

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  } else {
    return areSymmetric(root.left, root.right);
  }
};

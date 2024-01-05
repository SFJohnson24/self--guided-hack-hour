package 7 trees;
import javax.swing.tree;

class Solution {
    public TreeNode invertTree(TreeNode root) {
        // Base case
        if(root == null){
            return root;
        }
        invertTree(root.left);
        invertTree(root.right);
        // Swap
        TreeNode curr = root.left;
        root.left = root.right;
        root.right = curr;
        return root;
    }
}
/*
Given the root of a binary tree, return the maximum width of the given tree.
The maximum width of a tree is the maximum width among all levels.
The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
It is guaranteed that the answer will in the range of a 32-bit signed integer.

    Do a level-order traversal (which is an off-the-shelf bfs but dequeuing on a sub-loop all nodes enqueued in previous level)
    when enqueuing nodes, extend node properties into an object that also includes a computed position
    compute a new position, just like you would do on a min / max heap :
        left child: parent pos * 2 + 1
        right child: parent pos * 2 + 2
    when de-queuing nodes, keep track of min and max position for that level
    after de-queuing all nodes for that level, compute width based on diff of max and min + 1 (so it is inclusive)
    update global max

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  //initialize queue at 0 with root
  const queue = [{ node: root, pos: 0 }];
  let maxWidth = 0;

  while (queue.length) {
    const levelLength = queue.length;

    let min = Infinity,
      max = 0;

    for (let i = 0; i < levelLength; i++) {
      const curr = queue.pop();
      min = Math.min(min, curr.pos);
      max = Math.max(max, curr.pos);

      if (curr.node.left)
        queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });

      if (curr.node.right)
        queue.unshift({ node: curr.node.right, pos: curr.pos * 2 + 2 });
    }

    const levelWidth = levelLength === 1 ? 1 : max - min + 1;
    maxWidth = Math.max(maxWidth, levelWidth);
  }

  return maxWidth;
};

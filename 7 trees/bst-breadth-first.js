function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*
Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
};

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.
https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/#
*/

const minimumDistance = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // Up, Down, Left, Right

  const queue = [];
  queue.push([0, 0, 0]); // [row, col, distance]

  const visited = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    if (grid[row][col] === 2) {
      return distance;
    }

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] !== 1 &&
        !visited[newRow][newCol]
      ) {
        queue.push([newRow, newCol, distance + 1]);
        visited[newRow][newCol] = true;
      }
    }
  }

  return -1; // Target cannot be reached
};

// Example inputs
const grid1 = [
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0],
];

const grid2 = [
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0],
];

const grid3 = [[0, 0, 0, 1, 1, 0, 2, 0]];

console.log(minimumDistance(grid1)); // Output: 1
console.log(minimumDistance(grid2)); // Output: 6
console.log(minimumDistance(grid3)); // Output: -1

module.exports = { BinarySearchTree, bfs, minimumDistance };

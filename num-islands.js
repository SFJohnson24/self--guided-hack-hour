/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

const numIslands = grid => {
  let count = 0;
	
  //helper DFS function
	function callDFS(grid, i, j) {
    //OOB
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
			return;
		}
		//turn the 1 into a 0
		grid[i][j] = '0';
		//call function to turn all adjacent 1's that are part of island into a 0
		callDFS(grid, i + 1, j); // down
		callDFS(grid, i - 1, j); // up
		callDFS(grid, i, j + 1); // right
		callDFS(grid, i, j - 1); // left
	}
  //traverse the island looking for 1's, increment count and call helper when we hit island
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == '1') {
				count += 1;
				callDFS(grid, i, j);
			}
		}
	}
	
	return count;
};

module.exports = {numIslands};

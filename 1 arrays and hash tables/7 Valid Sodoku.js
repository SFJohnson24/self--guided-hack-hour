/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

 * @param {character[][]} board
 * @return {boolean}
*/

var isValidSudoku = function(board) {
      for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
      
      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }
      
      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      } 
    }
  }
  return true
};

let rows = [];
let columns = [];
let boxes = []; 

for (let i = 0; i < 9; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
}

//  for (let i = 0; i < board.length; i++) { 
//     for (let j = 0; j < board.length; j++) {

//       let cell = board[i][j];

//       if (cell != '.') {
//         if (rows[i].includes(cell)){
//           return false
//         } else rows[i].push(cell);

//         if (columns[j].includes(cell)){
//           return false;
//         } else columns[j].push(cell);

//         let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

//         if (boxes[boxIndex].includes(cell)){
//           return false;
//         } else boxes[boxIndex].push(cell);

//       }
//     }
//   } 

//   return true;

// }

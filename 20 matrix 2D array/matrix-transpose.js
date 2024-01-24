/* 
Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.
Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/
const matrixTranspose = (matrix) => {
  let transpose = [];
  //need to go into columns first and put those in first array
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      //adds via column as j and i are reversed in the push logic
      row.push(matrix[j][i]);
    }
    transpose.push(row);
  }
  return transpose;
};
const twoDimArray = [
  ['fred', 'barney'],
  [30, 40],
  [true, false],
];
console.log(matrixTranspose(twoDimArray));
/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/
const matrixRotate = (matrix) => {
  // Check if no rows/column, and if it's a valid square matrix (n x n)
  if (
    !matrix ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0]) ||
    matrix[0].length !== matrix.length
  ) {
    return undefined;
  }
  /*
   Transpose the matrix  -- https://leetcode.com/problems/transpose-matrix/description/  - t
   let result = []
  for (let i = 0; i < matrix[0].length; i++) {
    let inner = []
    for (let j = 0; j < matrix.length; j++) {
      inner.push(matrix[j][i]);
    }
    result.push(inner);
  }
  return result;
}
*/
  //row
  for (let i = 0; i < matrix.length; i++) {
    //column - can use matrix length for limit of j since it is a square
    for (let j = i; j < matrix.length; j++) {
      //swap values using array destructing
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.table(matrix);

  // Reverse each row to complete the clockwise rotation
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }

  return matrix;
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matrixRotate(matrix));

const nonSquareMatrixRotate = (matrix) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a new matrix with swapped dimensions (n x m)
  const transposedMatrix = new Array(numCols).fill(null).map(() => []);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      transposedMatrix[j][i] = matrix[i][j]; // Swap rows and columns in the new matrix
    }
  }

  // Copy the values from the transposed matrix back into the original matrix
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      matrix[j][i] = transposedMatrix[i][j];
    }
  }

  return transposedMatrix;
};

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.table(nonSquareMatrixRotate(matrix2));

//rotate 180 degrees we reverse rows and reverse the order of rows
const flipMatrix180Degrees = (matrix) => {
  if (!matrix || matrix.length === 0 || !Array.isArray(matrix[0])) {
    return undefined; // Not a valid matrix
  }

  const numRows = matrix.length;

  // Reverse each row of the matrix
  for (let i = 0; i < numRows; i++) {
    matrix[i].reverse();
  }

  // Reverse the order of the rows
  matrix.reverse();
};

// Example usage:
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

flipMatrix180Degrees(matrix3);

console.table(matrix3);

//To turn a matrix upside down, you can simply reverse the order of the rows without reversing the elements within each row. Here's an algorithm to achieve this:
const turnMatrixUpsideDown = (matrix) => {
  if (!matrix || matrix.length === 0 || !Array.isArray(matrix[0])) {
    return undefined; // Not a valid matrix
  }
  // Reverse the order of the rows
  matrix.reverse();
};
// Example usage:
const matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
turnMatrixUpsideDown(matrix4);
console.table(matrix4); // The original matrix is now turned upside down

module.exports = { matrixTranspose, matrixRotate };

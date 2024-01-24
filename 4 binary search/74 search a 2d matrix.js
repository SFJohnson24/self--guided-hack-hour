/*
74  
https://leetcode.com/problems/search-a-2d-matrix/description/ 

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/


var searchMatrix = function(matrix, target) {
  let row = matrix.length, col = matrix[0].length
  let left=0 ,right = row*col-1

  while (left<=right){
    let mid=Math.floor((left+right)/2)
/*find the mid of 2D array - mid//col gives row 6 total cells/ number of columns in the rows to fill cells will give the row
mid%col will give remaindure which will tell us what column it is in 
*/
    let num=matrix[Math.floor(mid/col)][mid%col]
    if (num==target){
      return true
    }else if (num>target){
      right=mid-1
    }else{
      left=mid+1
    }
  }
  return false
  }
      

      
}




/*
brute force
    if (!matrix.length || !matrix[0].length) return false;
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
  }
*/

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row,col = len(matrix),len(matrix[0])
        left,right = 0,row*col-1

        while left<=right:
            mid=(left+right)//2
#find the mid of 2D array - mid//col gives row 6 total cells/ number of columns in the rows to fill cells will give the row
#mid%col will give remaindure which will tell us what column it is in 
            num=matrix[mid//col][mid%col]
            if num==target:
                return True
            if num>target:
                right=mid-1
            else:
                left=mid+1
        return False
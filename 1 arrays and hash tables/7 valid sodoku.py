
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            row = set()
            col = set()
            box = set()

            for j in range(9):
                _row = board[i][j]
                _col = board[j][i]
                _box = board[3*math.floor(i/3)+math.floor(j/3)][3*(i%3)+(j%3)]
                
                if _row != '.':
                    if _row in row:
                        return False
                    row.add(_row)
                if _col != '.':
                    if _col in col:
                        return False
                    col.add(_col)
                if _box != '.':
                    if _box in box:
                        return False
                    box.add(_box)
        return True


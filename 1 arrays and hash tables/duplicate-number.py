"""
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
"""
def duplicateNumber(arr, N):
    arr.sort()
    for i in range(N):
        if arr[i] == arr[i+1]:
            return arr[i]
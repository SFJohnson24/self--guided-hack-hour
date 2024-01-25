/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function(nums, k) {

    let map = {}
    let result = []
    let arr = new Array(nums.length + 1).fill().map(() => [])
  
    for (let num of nums) {
      map[num] = (map[num] || 0) + 1
    }
  
    for (let [key, value] of Object.entries(map)) {
      arr[value].push((key))
    }
  
    for (let i = arr.length - 1; i >= 0; i--){
      for (let num of arr[i] ){
        if (k > 0){
          result.push(num)
          k--
        }
        
      //   if (k === 0) {
      //      return result
      // }
    }
    }
  
     return result

    }
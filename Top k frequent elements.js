/*
347. Top K Frequent Elements
Medium
16.1K
581
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
    k is in the range [1, the number of unique elements in the array].
    It is guaranteed that the answer is unique.

 
Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

https://leetcode.com/problems/top-k-frequent-elements/
*/

//cant sort

// var topKFrequent = function(nums, k) {
//     const freq=new Map()
//     let result=[]
//     let temp=[]
    
//      for (num of nums){
//           freq.has(num) ? freq.set(num, freq.get(num)+1)  : freq.set(num, 1)
//           }
//       for ([num,f] of freq){
//         temp[f] ?  temp[f].push(num) : temp[f]=[num];
//       }
//       for (let i=temp.length-1; i>0; i--){
//           if (temp[i]) {
//             result.push(...temp[i])
//           }
//           if(result.length===k){
//             break
//           }
//         }
//   return result
// }



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

  };
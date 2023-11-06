/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
*/

var longestConsecutive = function (nums) {
    if (nums == null || nums.length === 0) return 0;
  
    const set = new Set(nums);
    let max = 0;
  
    for (let num of set) {
//ignore later values in a sequence
      if (set.has(num - 1)) continue; 
  
      let currNum = num;
      let currMax = 1;
  
      while (set.has(currNum + 1)) {
        currNum++;
        currMax++;
      }
      max = Math.max(max, currMax);
    }
  
    return max;
  }
  };
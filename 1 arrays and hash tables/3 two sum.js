/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

var twoSum = function(nums, target) {
        //create a map
    let map=new Map()
    //loop through the array
  for (let i=0; i<nums.length; i++){
        //check if the map has the difference
    let diff=target-nums[i]
    if (map.has(diff)){
      let value=map.get(diff)
      return [i, value]
    }
        //set the map key to the diff, value to index
    map.set(nums[i], i)
  }
};
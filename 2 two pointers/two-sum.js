/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

const twoSum = (arr, target) => {
  const diff = new Set();
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (diff.has(arr[i])) {
      return (result = true);
    } else {
      diff.add(target - arr[i]);
    }
  }
  return result;
};

/*
Extension:
Given an array of numbers and a target number, 
return true if three of the numbers in the array add up to the target.
Otherwise, return false.

The straightforward way to solve this problem would take O(n³) time. Is it possible to do this in O(n²) time?

*/

const threeSum = (arr, target) => {
  //this is not accounting for duplicates  - returning true but using a value in arr 2 times
  if (arr.length < 3) {
    return false;
  }
  //contains 2 sums
  const diff = new Set();
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      diff.add(arr[i] + arr[j]);
    }
  }
  for (let w = 0; w < arr.length; w++) {
    if (diff.has(target - arr[w])) {
      return (result = true);
    }
  }
  return result;
};

// var threeSum = function(nums) {
//   //empty array to store the result (res).
//   let res=[];
//   //sort the given array|| default order = asc order
//   //we sort the arr as it's crucial for it to be done in two-pointer technique
//   //helps us check which int to go to next based on whether it's below or above zero.
//   nums.sort((a,b)=>(a-b))
//   for(let i=0;i<nums.length-2;i++){
//       //to remove duplicates
//       if( i>0 && nums[i]===nums[i-1]) continue;

//       let j=i+1; let k=nums.length-1;
//       while(j<k){
//           let sum = nums[i] + nums[j] + nums[k];
//           if(sum===0){
//               res.push([nums[i],nums[j],nums[k]]);
//               //stop duplicates
//               while(nums[j]===nums[j+1]) j++;//or else we end up getting a duplicate triplet
//               while(nums[k]===nums[k+1]) k--;//or else we end up getting a duplicate triplet
//               j++;//even if they aren't equal we still incremenet j
//               k--;//even if they aren't equal we still decrement k
//           }
//           else if(sum<0){ //we increase the value of j
//               j++;
//           }
//           else{//if the sum value is more than zero we decrease the value of k
//               k--;
//           }
//       }
//   }
//   return res;
// };

module.exports = { twoSum, threeSum };

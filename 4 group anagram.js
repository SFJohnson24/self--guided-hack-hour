/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var groupAnagrams = function(strs) {
    if (strs===0){
        return 
    }
    if (strs===1){
        return [strs[0]]
    }
    let result={}
    for (str of strs){
        let letters=str.split("").sort().join("")
          if (!result[letters]){
            result[letters]=[str]
          }else{
            result[letters].push(str)
          }
        }
  return Object.values(result)
    }

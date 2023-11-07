/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 */

var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false
    }
    let count={}
    for (let i=0; i<s.length; i++){
        count[s[i]] ? count[s[i]]++ : count[s[i]]=1;
    }
      for (let j=0; j<t.length; j++){
        let curr=t[j]
        if(count[curr]){
            count[curr]--
        }else{
            return false
        }
      }
      return true
};
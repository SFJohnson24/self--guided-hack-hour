/*
Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.
For example, given n = 2, a solution set is:
[
  "(())",
  "()()"
]
Given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
Given n = 0, a solution set is:
[
  ""
]
*/
const generateParentheses = n => {
  if (n===0){
    return ['']
  }
  let result=[]
  let cache=''

  const helper =(o, c, cache)=>{
    console.log(cache)
    console.log(o)
    console.log(c)
    if (o===n && c===n){
      result.push(cache)
      return
    }
    if (o<n){
      helper(o+1, c, cache+'(')
    }
    if (o>c){
      helper(o, c+1, cache+')')
      }
  }

helper(0, 0, '')
return result
};

console.log(generateParentheses(2))

module.exports = {generateParentheses};

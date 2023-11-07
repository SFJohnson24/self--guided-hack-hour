/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {
    for (let leftToRight=0; leftToRight+substring.length <= string.length; leftToRight +=1){
        if (substring===string.slice(leftToRight, leftToRight+substring.length)) return true;
    }
    return false
};

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {
    for (let leftToRight=0; leftToRight+substring.length <= string.length; leftToRight +=1){
        for (let index=0; index<substring.length; index+=1){
            if (!(string[leftToRight+index]===substring[index] || substring[index]==="_" || '_'===string[leftToRight+index])) break;
        if (index===substring.length-1) return true
        }
    }
    return false
};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };
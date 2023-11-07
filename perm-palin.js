/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
    let count={}
    for (let i=0; i<str.length; i++){
        if (count[str[i]]){
            count[str[i]]++
        }else{
            count[str[i]]=1
        }
    }

    if (str.length%2===0){
        let freq=Object.values(count)
        for(let j=0; j<freq.length; j++){
            if (freq[j]%2 !=0){
                return false
            }
        }
        return true
    }else{
        let freq=Object.values(count)
        let ones=0
        for(let j=0; j<freq.length; j++){
            if (freq[j]%2===1){
                ones++
            }
        } 
        if(ones===1){
            return true
        }else{
            return false
        }
    }
};

/* 
 * Extension: Solve in constant space complexity.
 */
//use a hash map
const permPalinAdvanced = str => {
    const charCount = new Map();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let oddCount = 0;

    for (const count of charCount.values()) {
        if (count % 2 !== 0) {
            oddCount++;

            if (oddCount > 1) {
                return false;
            }
        }
    }

    return true;
};


module.exports = { permPalin };
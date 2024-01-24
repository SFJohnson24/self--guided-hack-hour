/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 
For example: 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
*/
function binToDec(binString) {
  function zeroOne(string) {
    if (string === "0") {
      return 0;
    } else {
      return 1;
    }
  }

  let sum = 0;
  let r = binString.length;

  for (let i = 0; i < binString.length; i++) {
    sum += zeroOne(binString[i]) * 2 ** (r - i - 1);
  }
  return sum;
}

module.exports = { binToDec };

/*
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
*/

function binToDec(binString){

}



module.exports = {binToDec};

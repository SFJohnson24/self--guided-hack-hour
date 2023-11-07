/*
Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/
const getAllProducts = (array) => {
  const output=[]
  let before=1
  let after=1
//array of products that occur before a given position
  for (let i=0; i<array.length; i++){
    output.push(before)
    before *=array[i]
  }
//array of products that occur after a given position
  for (let i=array.length -1; i>=0; i--){
    output[i] *=after
    after*=array[i]
  }

  return output


  //recursive approach

//   let result = [];

//   function helper (array, product) {
//     if (array.length === 0) {
//       result.push(product);
//       return;
//     }
//     product*= array[0];
//     helper(array.slice(1), product);
//   }

//   for (let i = 0; i < array.length; i++) {
//     const otherElements = array.filter((element) => element !== array[i]);
//     helper(otherElements, 1);
//   }

//   return result;
// };

console.log(getAllProducts([2, 3, 1]));

module.exports = { getAllProducts };

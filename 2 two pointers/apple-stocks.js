/*
Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = (apple_stock) => {
  if (!Array.isArray(apple_stock)) {
    return;
  }
  let high = apple_stock[0];
  let low = apple_stock[0];
  let diff = 0;
  let currDiff = 0;
  //iterate through getting lowest and highest, setting difference
  for (let i = 0; i < apple_stock.length; i++) {
    if (apple_stock[i] >= high) {
      high = apple_stock[i];
      currDiff = high - low;
      if (currDiff > diff) {
        diff = currDiff;
      }
    }
    if (high >= apple_stock[i]) {
      low = apple_stock[i];
      high = 0;
      currDiff = 0;
    }
  }
  return diff;
};

console.log(highestProfit([1000, 500, 1500, 2000, 0, 2000, 1500, 250, 3000]));
module.exports = { highestProfit };

/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power, total = 1) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  if (power == 0) {
    return total;
  }
  return pow(base, power - 1, total * base);
}

//console.log(pow(2, 5));

/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */

function powRecurse(base, power, total = 1) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  let result = {};
  result[2] = base * base;
  result[1] = base;
  if (power == 0) {
    return result;
  }
  if (power - 2) {
    total *= result[2];
    return pow(base, power - 2, total);
  }
  if (power - 1) {
    total *= result[1];
    return pow(base, power - 1, total);
  }
}
console.log(powRecurse(2, 5));

module.exports = { pow, powRecurse };

const { registerCustomQueryHandler } = require("puppeteer");

/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
const drawStairs = (n, current = 1) => {
  if (n < 0) {
    return "";
  }
  //if * is 1 console.log and do not call - break case
  if (current > n) {
    return;
  }
  let space = " ";
  let star = "*";
  //recurse through starting at bottom step LI-FE stack
  //console log, then recursive call
  console.log(`${space.repeat(n - current)}` + `${star.repeat(current)}`);
  drawStairs(n, current + 1);
};
drawStairs(5);
/*
more optimal -while loop faster than recursion
const drawStairs = (n) => {
  if (height <=0){
    console.log(" ");
  }
  let stair = 1; 
  //concat will concat even with blank
  while (stairs <=height){
    console.log(" ".repeat(height-stair).concat("*".repeat(stair)));
    stair++;
  }
}
*/

/* 
Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/
const drawHalfStar=(mid, half = "top") => {
  const slash1 = half === "top" ? "\\" : "/";
  const slash2 = half === "top" ? "/" : "\\";

  let halfstar="";
  let i=0;

  while (i<mid){
    const numOuter= half === "top" ? i : mid-i-1;
    const numInner= half === "top" ? mid-i-1 : i;
    const OuterSpace=" ".repeat(numOuter);
    const OuterSpace=" ".repeat(numOuter);
    halfStar +=outerSpaces + slash1 +innerSpaces;
    halfStar +="|";
    halfStar +=innerSpaces + slash2 +outerSpaces;

    if (i !==mid-1 || half==="top") halfStar+="\n";
    i+=1;
  }
  return halfStar;
}



const drawStar = (n) => {
  if ( n < 1 || n % 2 === 0 ) return;
  if ( n === 1 ) return console.log("+");

  const mid Math.floor(n/2);
  const dashes = "-".repeat(mid);
  const midRow = dashes+ "+" + dashes +"\n"

  const star = drawHalfStar(mid, "top") + midRow + drawHalfStar(mid, "bottom")
};


module.exports = { drawStairs, drawStar };

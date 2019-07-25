/*
Sum of a Beach
https://www.codewars.com/kata/sum-of-a-beach/train/javascript
*/


function sumOfABeach(b) {
  b = b.toLowerCase();
  let arr = b.match(/sun|water|sand|fish/g);
  return (arr === null)? 0: arr.length;
 }
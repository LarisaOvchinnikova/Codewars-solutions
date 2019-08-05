/*
Recursion #1 - Factorial
https://www.codewars.com/kata/recursion-number-1-factorial/train/javascript
*/
const factorial = n => {
  if (n === 0) return 1;
  else if (n === 1) return 1;
  else return n * factorial(n-1);
};
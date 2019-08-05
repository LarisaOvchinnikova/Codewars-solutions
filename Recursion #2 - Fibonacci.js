/*
Recursion #2 - Fibonacci
https://www.codewars.com/kata/recursion-number-2-fibonacci/train/javascript
*/
const fibonacci = n => {
 if (n === 1 || n === 2) return 1;
 else return fibonacci(n-1) + fibonacci(n-2);
};

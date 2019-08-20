// Numerical Palindrome #1
//https://www.codewars.com/kata/58ba6fece3614ba7c200017f
function palindrome(num) {
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  let str = +num.toString().split('').reverse().join('');
  return (num === str);

}
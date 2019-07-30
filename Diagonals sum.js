/*
Diagonals sum
https://www.codewars.com/kata/diagonals-sum/train/javascript
*/
function sum(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i][i];
    sum += a[i][a.length - 1 - i];
  }
  return sum;
}

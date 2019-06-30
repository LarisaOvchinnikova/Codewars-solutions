/*
Difference Of Squares

https://www.codewars.com/kata/558f9f51e85b46e9fa000025
*/
function differenceOfSquares(n){
  let sumSq = 0;
  let sum = 0;
  for (let i = 1; i <=n ; i++){
   sum += i;
   sumSq += i**2;
  }
  return Math.abs(sumSq - sum**2);
}
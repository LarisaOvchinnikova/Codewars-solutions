/*
Maximum Product
https://www.codewars.com/kata/5a4138acf28b82aa43000117
*/

function adjacentElementsProduct(arr) {
let max = arr[0] * arr[1];
for (let i = 0; i < arr.length-1; i++){
  if (arr[i] * arr[i+1] > max) max = arr[i] * arr[i+1];
  }
  return max;
}
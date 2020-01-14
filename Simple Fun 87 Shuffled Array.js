//Simple Fun #87: Shuffled Array
//https://www.codewars.com/kata/589573e3f0902e8919000109
function shuffledArray(arr) {
  let sum = arr.reduce((a,b) => a + b);
  let el = sum / 2;
  arr = arr.sort((a, b) => a - b);
  let temp = arr.splice( arr.indexOf(el), 1);
  return arr;
}

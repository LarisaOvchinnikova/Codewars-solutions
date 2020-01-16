//Sort array by string length
//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c

function sortByLength (arr) {
  return arr.sort((a,b)=>a.length - b.length);
};
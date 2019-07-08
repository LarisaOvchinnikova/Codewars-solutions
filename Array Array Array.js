/*
Array Array Array
https://www.codewars.com/kata/array-array-array/train/javascript
*/

function explode(x){
let score;
let res =[];
 if (typeof x[0] === 'number' && typeof x[1] === 'number')  score = x[0] + x[1];
 if (typeof x[0] === 'number' && typeof x[1] !== 'number')  score = x[0];
 if (typeof x[0] !== 'number' && typeof x[1] === 'number')  score = x[1];
 if (typeof x[0] !== 'number' && typeof x[1] !== 'number')  return 'Void!';
 for (let i = 0; i < score; i ++) {
  res.push(x);
 }
 return res;
}
/*
Get list sum recursively
https://www.codewars.com/kata/get-list-sum-recursively/train/javascript
*/
function sumR(x) {
 return (x.length === 0)? 0: x.shift() + sumR(x);
}
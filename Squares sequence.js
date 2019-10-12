//Squares sequence
//https://www.codewars.com/kata/5546180ca783b6d2d5000062/solutions/javascript
function squares(x, n) {
 if (n <= 0) return [];
 let res = [];
 let p = x;
 for (let i = 0; i < n; i++){
  res.push(p);
  p = p * p;
 }
 return res;
}
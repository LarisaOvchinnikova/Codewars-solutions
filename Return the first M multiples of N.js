/*
Return the first M multiples of N
https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/javascript
*/
function multiples(m, n){
  let res = [];
  for (let i = 1; i <= m; i++){
    res.push(n*i);
  }
  return res;
}
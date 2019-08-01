/*
Extra Perfect Numbers (Special Numbers Series #7)
https://www.codewars.com/kata/extra-perfect-numbers-special-numbers-series-number-7/train/javascript */
function extraPerfect(n){
 let res = [];
 for (let i = 1; i <= n; i+=2) {
   res.push(i);
 }
 return res;
}
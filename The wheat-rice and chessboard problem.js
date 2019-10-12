//The wheat/rice and chessboard problem
//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
function squaresNeeded(n){
 let s = 0; let k = 0; let x=1;
 while (s < n) {
   s = s + x;
   x = x*2;
   k++;
 }
  return k;
}
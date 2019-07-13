/*
Volume of a cup
https://www.codewars.com/kata/volume-of-a-cup/train/javascript
*/
function cupVolume(d1, d2, height){
   let r1 = d1 / 2;
   let r2 = d2 / 2;
   v  = Math.PI * height * (r1 ** 2 + r1 * r2 + r2 ** 2) / 3;
   return +v.toFixed(2);
  }
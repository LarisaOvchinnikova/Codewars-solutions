/*
Nice Array
https://www.codewars.com/kata/nice-array/train/javascript
*/
function isNice(a){
 let fl;
 for (let i = 0; i < a.length; i++){
   fl = 0;
   for (let j = 0; j < a.length; j++){
     if (a[i] === a[j] + 1 || a[i] === a[j] - 1) {fl = 1;}
   }
   if (fl === 0) return false;
 }
 return true;
}

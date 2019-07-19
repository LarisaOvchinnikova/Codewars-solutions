/*
Exes and Ohs
https://www.codewars.com/kata/exes-and-ohs/train/javascript
*/
function XO(str) {
   let x = 0;
   let o = 0;
   str = str.toLowerCase();
   for (let i = 0; i < str.length; i++){
     if (str[i] === 'x') x++;
     if (str[i] === 'o') o++;
   }
   return (x === o)? true : false;
}
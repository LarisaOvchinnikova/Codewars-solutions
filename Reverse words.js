/*
Reverse words
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
*/
function reverseWords(str) {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
   }
   return arr.join(' ');
}
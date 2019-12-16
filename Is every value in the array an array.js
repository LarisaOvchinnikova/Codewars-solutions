//Is every value in the array an array?
//https://www.codewars.com/kata/582c81d982a0a65424000201
const arrCheck = value => {
 for (let i = 0; i< value.length;  i++){
   if (!Array.isArray(value[i])) return false;
 }
 return true;
}
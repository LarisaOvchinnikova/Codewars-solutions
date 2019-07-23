/* Form The Largest
https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e
*/
function maxNumber(n){
  return +n.toString().split('').sort((a,b)=>b-a).join('');
}
//Greatest common divisor
//https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd
function mygcd(a,b){
let c;
  while (b !== 0) {
    c = a % b;
    a = b;
    b = c;
  }
 return a;
}
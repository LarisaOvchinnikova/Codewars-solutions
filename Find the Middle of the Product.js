// Find the Middle of the Product
// https://www.codewars.com/kata/5ac54bcbb925d9b437000001

function findMiddle(str){
if (Array.isArray(str) || typeof str === 'number' || ! /[0-9]/g.test(str)) return -1;
let s =str.match(/[0-9]/g).map(el=>+el).reduce((a,b)=>a*b, 1) + '';
return (s.length % 2 !== 0)? +s[Math.trunc(s.length/2)] : +(s[Math.trunc(s.length/2) - 1]  + s[Math.trunc(s.length/2)] + '');
}

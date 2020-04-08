// Responsible Drinking
// https://www.codewars.com/kata/5aee86c5783bb432cd000018

function hydrate(s) {
let digits = '0123456789';
  let arr = s.split(' ');
  let sum = arr.filter(el=>digits.includes(el[0])).map(el=>+el).reduce((a,b)=>a + b, 0);
  return (sum === 1)? "1 glass of water" : `${sum} glasses of water`;
}
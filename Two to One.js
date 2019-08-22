// Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  let s = s1 + s2;
  let arr = s.split('').sort();
  return arr.filter(function(elem, index){
  return (index === arr.indexOf(elem))}).join('');
}
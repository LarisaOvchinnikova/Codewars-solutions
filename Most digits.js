//Most digits
//https://www.codewars.com/kata/58daa7617332e59593000006
function findLongest(array){
  let arr = array.map(el=>(el+'').length);
  let max = Math.max(...arr);
  let ind = arr.indexOf(max);
  return array[ind];
}
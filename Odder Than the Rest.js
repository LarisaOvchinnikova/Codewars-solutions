//Odder Than the Rest
//https://www.codewars.com/kata/5983cba828b2f1fd55000114
function oddOne(arr) {
  return arr.findIndex(el => Math.abs(el) % 2 === 1);
}
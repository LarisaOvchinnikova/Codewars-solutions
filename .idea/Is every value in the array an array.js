//Is every value in the array an array?
//https://www.codewars.com/kata/582c81d982a0a65424000201
function arrCheck(v){
for (let i = 0; i < v.length; i++){
  if (!Array.isArray(v[i])) return false
}
return true
}

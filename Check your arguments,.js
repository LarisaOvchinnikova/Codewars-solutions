//Check your arguments
//https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd
function objectType(obj) { //if no arguments are passed, defaults to null
 if (Array.from(arguments).length === 0) return '[object Null]';
 else  return Object.prototype.toString.call(obj);
}
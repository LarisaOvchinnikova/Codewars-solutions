//Work out is it falsy or truthy?
//https://www.codewars.com/kata/583310c5dbeb310c34000352

function falsyOrTruthy(arr) {
  return (arr.length % 2 === 0)? arr.filter(el=> !!el === true): arr.filter(el=> !!el===false);
}
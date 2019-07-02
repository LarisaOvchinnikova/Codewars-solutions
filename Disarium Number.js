/*
Disarium Number (Special Numbers Series #3)
https://www.codewars.com/kata/disarium-number-special-numbers-series-number-3/train/javascript
*/
function disariumNumber(n){
  let sum = 0;
  let str = n.toString();
  for (i = 0; i < str.length; i++) {
   sum = sum + Math.pow(+str[i], i+1);
  }
  return (n === sum)? 'Disarium !!': 'Not !!'
}
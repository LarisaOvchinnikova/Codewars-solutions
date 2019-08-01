/*
Minimum Steps (Array Series #6)
https://www.codewars.com/kata/minimum-steps-array-series-number-6/train/javascript
*/
function minimumSteps(numbers, value){
 numbers = numbers.sort((a,b) => a - b);
 let sum = 0;
 let i = 0;
 while (sum < value) {
   sum += numbers[i];
   i++;
 }
 return i-1;
}
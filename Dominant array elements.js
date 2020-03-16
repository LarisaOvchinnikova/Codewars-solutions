//Dominant array elements
//https://www.codewars.com/kata/5a04133e32b8b998dc000089
function solve(arr){
 return arr.filter((el, i) => arr.slice(i+1).every(e => e < el));
};

//2 case
function solve(arr){
let res = [];
let fl = 0;
for (let i = 0; i < arr.length - 1; i++){
  for (let j = i+1; j < arr.length; j++){
    if (arr[i] > arr[j]) {fl = 0;}
    else {fl = 1; break;}
  }
  if (fl === 0) res.push(arr[i]);
}
res.push(arr[arr.length-1]);
return res;
};
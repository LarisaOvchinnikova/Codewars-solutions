// Rock Off!
// https://www.codewars.com/kata/5b097da6c3323ac067000036

function solve(a, b) {
let sumA = 0;
let sumB = 0;
for (let i = 0; i < 3; i++){
  if (a[i] > b[i]) sumA++;
  else if (a[i] < b[i]) sumB++;
}
return (sumA > sumB)? `${sumA}, ${sumB}: Alice made "Kurt" proud!` : (sumA < sumB)? `${sumA}, ${sumB}: Bob made "Jeff" proud!` :`${sumA}, ${sumB}: that looks like a "draw"! Rock on!`;

}
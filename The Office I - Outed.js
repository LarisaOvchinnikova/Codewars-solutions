/*
The Office I - Outed
https://www.codewars.com/kata/the-office-i-outed/train/javascript
*/

function outed(meet, boss){
let s = meet[boss];
for (let i in meet){
 s += meet[i]
}
return (s / Object.entries(meet).length <= 5)? 'Get Out Now!' : 'Nice Work Champ!';
}
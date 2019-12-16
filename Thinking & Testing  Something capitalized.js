//Thinking & Testing : Something capitalized
//https://www.codewars.com/kata/56d93f249c844788bc000002/solutions/javascript
function testit(s){
if (s === '') return '' +'';
let res = s.split(' '); let str; let result = '';
for (let i = 0; i < res.length; i++){
  let str = res[i].slice(0,res[i].length-1) + res[i][res[i].length-1].toUpperCase();
  result +=str + ' ';
 }
 result = result.trim();
  return result + '';
}
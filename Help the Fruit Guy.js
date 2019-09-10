//Help the Fruit Guy
https://www.codewars.com/kata/557af4c6169ac832300000ba
function removeRotten(arr){
if (!arr) return [];
  let res =[];
  for (let i = 0; i<arr.length; i++){
    let str = arr[i].replace(/rotten/g,'').toLowerCase();
    res.push(str);
  }
  return res;
}
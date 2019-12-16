//Divide and Conquer
//https://www.codewars.com/kata/57eaec5608fed543d6000021
function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

//2 case
function divCon(x){
 let sumNumber = 0;
 let sumStr = 0;
 for (let i = 0; i <x.length; i++){
   if (typeof x[i] === 'number') sumNumber +=x[i];
   if (typeof x[i] === 'string') sumStr += +x[i];
 }
 return sumNumber - sumStr;
}

//Numbers with d occurences of digit d
//https://www.codewars.com/kata/5a40fc7ce1ce0e34440000a3

function isDd(n) {
 n=n.toString();
 let obj = {};
 for (let i = 0; i< n.length; i++){
   if (obj[n[i]]) obj[n[i]]++;
   else obj[n[i]] = 1;
 }
 for (let i in obj){
    if ( +i === obj[i]) return true;
 }
  return false;
}
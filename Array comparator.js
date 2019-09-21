//Array comparator
//https://www.codewars.com/kata/561046a9f629a8aac000001d
function matchArrays(v,r){
 let k = 0;
 for (let i=0; i <v.length; i++){
   if (r.includes(v[i])) k++;
 }
 return k;
}
//Numbers to Letters
https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
function switcher(x){
 let alph = "0zyxwvutsrqponmlkjihgfedcba!? ";
 let res = '';
 for (let i = 0; i < x.length; i++){
   res = res + alph[x[i]];
 }
 return res;
}

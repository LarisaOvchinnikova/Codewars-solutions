//
/Number-Star ladder/https://www.codewars.com/kata/5631213916d70a0979000066

function pattern(n){
 let output="1\n";
 for (let i = 1; i < n-1; i++){
    output = output + '1' + '*'.repeat(i) + (i+1) + '\n'
 }
 output = output + '1' + '*'.repeat(n-1) + n;
 return output;
}
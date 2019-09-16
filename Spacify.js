//Spacify
//https://www.codewars.com/kata/57f8ee485cae443c4d000127
function spacify(str) {
  let res = '';
  for (let i = 0; i <str.length-1; i++){
    res = res + str[i] + ' ';
  }
  res = res + str[str.length-1];
  return res;
}
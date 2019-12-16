//Thinking & Testing: A and B?
//https://www.codewars.com/kata/56d904db9963e9cf5000037d

//1 case
function testit(a,b){
  let a2 = a.toString(2);
  let b2 = b.toString(2);
  let str = '';

  if (a2.length < b2.length) a2 = '0'.repeat(b2.length - a2.length) + a2;
  if (a2.length > b2.length) b2 = '0'.repeat(a2.length - b2.length) + b2;

  for (let i = 0; i < a2.length; i++) {
    str += a2[i] == 1 || b2[i] == 1 ? '1' : '0';
  }

  return parseInt(str, 2);
}
//2 case
function testit(a,b){
  return a | b;

}
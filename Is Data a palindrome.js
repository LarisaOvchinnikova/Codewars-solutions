// function determines is current data palindrome and returns true or false
function isPalindrome() {
let d = new Date().getDate();
let m = new Date().getMonth()+1;
let y = new Date().getFullYear();
let data = ''+m+d+y;
return data === data.split('').reverse().join('');
}
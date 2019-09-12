//Password validator
//https://www.codewars.com/kata/56a921fa8c5167d8e7000053
/*
Description
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

There needs to be at least 1 uppercase letter.
There needs to be at least 1 lowercase letter.
There needs to be at least 1 number.
The password needs to be at least 8 characters long.
You are permitted to use any methods to validate the password.
*/
function password(str) {
 let regA =/[A-Z]/g;
 let rega = /[a-z]/g;
 let reg1 = /[0-9]/g;
 if (str.search(regA) !== -1 &&
     str.search(rega) !== -1 &&
     str.search(reg1) !== -1 && str.length >=8) return true;
  else return false;
}
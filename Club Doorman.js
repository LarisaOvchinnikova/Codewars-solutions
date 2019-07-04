/*
Club Doorman
https://www.codewars.com/kata/club-doorman/train/javascript
*/

function passTheDoorMan (word){
  for (let i = 0; i <word.length- 1; i++){
    if (word[i] === word[i+1]) return 3*(word.charCodeAt(i)-96);
}
}
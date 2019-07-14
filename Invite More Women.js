/*
Simple Fun #152: Invite More Women?
https://www.codewars.com/kata/simple-fun-number-152-invite-more-women/train/javascript
*/

function inviteMoreWomen(l) {
  let sum = l.reduce((a,b)=>a+b);
  return (sum > 0) ? true : false;
}
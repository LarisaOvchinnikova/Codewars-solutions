/*
Player Contact Manager
https://www.codewars.com/kata/player-contact-manager/train/javascript
*/
function playerManager(players) {
  if (players === '' || !players) return [];
  players = players.replace(/' '/g,'');
  let arr = players.split(',');
  for (let i = 0; i < arr.length; i ++){
    arr[i] = arr[i].trim();
  }
  let res = [];
  let ob ={};
  for (let i = 0; i < arr.length-1; i +=2){
    ob.player = arr[i];
    ob.contact = +arr[i+1];
    res.push(ob);
    ob = {};
  }



/*
Who's Online?
https://www.codewars.com/kata/whos-online/train/javascript
*/
function whosOnline(friends){
let res = {
  online: [],
  offline: [],
  away: [],
};

for (let i = 0; i < friends.length; i++){
  if (friends[i].status === 'online' && friends[i].lastActivity <=10)
    res.online.push(friends[i].username);
  else
      if (friends[i].status === 'offline') res.offline.push(friends[i].username);
      else
        if (friends[i].status === 'online' && friends[i].lastActivity > 10)
           res.away.push(friends[i].username);
  }
  for (let i in res){
    if (res[i].length === 0) {delete res[i]}
 }
return res;
}

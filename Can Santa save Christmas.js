//Can Santa save Christmas?
//https://www.codewars.com/kata/5857e8bb9948644aa1000246

function determineTime(durations){
let time = 0;
 for (let i = 0; i < durations.length; i++){
   let arr = durations[i].split(':');
   let h = +arr[0];
   let m = +arr[1];
   let s = +arr[2];
   let t = h*3600 + m*60 + s;
   time = time + t;
 }
 return (time <= 24*3600);
}



// Driving Licence
// https://www.codewars.com/kata/driving-licence/train/javascript

function driver(data) {
  let month =['0', 'Jan','Feb','Mar','Apr','May','Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];
  let res = '';
  let sL =data[2].length;
  if (sL < 5) res = data[2] + '9'.repeat(5-sL);
    else res = data[2].slice(0,5);
  res = res + data[3][data[3].length-2];
  let m = data[3].slice(3,6);
  let mNum = month.indexOf(m);
  if (data[4] === 'M') {
    if (mNum >=10) res = res + mNum;
                   else res = res + '0' + mNum;
  } else {
      mNum += 50;
      res = res + mNum;
  }
  res = res + data[3].slice(0,2) + data[3][data[3].length-1] + data[0][0];
  if (data[1] === '') res = res +'9'; else res = res + data[1][0];
  res = res + '9AA';
  res = res.toUpperCase();
  return res;
}
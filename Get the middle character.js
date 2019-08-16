//Get the Middle Character
//https://www.codewars.com/kata/get-the-middle-character/train/javascript
function getMiddle(str)
{
  let leng = str.length;
	let n = Math.floor(leng/2);
	if (leng % 2 === 1)
    return str.slice(n,n+1);
  else return str.slice(n-1,n+1);
}

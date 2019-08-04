/*
Easy wallpaper
https://www.codewars.com/kata/easy-wallpaper/train/javascript
*/
function wallpaper(l, w, h) {
if (l * w * h === 0) return 'zero';
 let s = 2 * w * h +2 * l * h;
 let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen',
            'seventeen', 'eighteen', 'nineteen', 'twenty'];
 let k = s /5.2;
 k = Math.ceil(k + 0.15* k);
 return arr[k];
}

/*
Remove anchor from URL
https://www.codewars.com/kata/remove-anchor-from-url/train/javascript
*/

function removeUrlAnchor(url){
  return url.replace(/#.*/,'');
}
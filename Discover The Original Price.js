/*
Discover The Original Price
https://www.codewars.com/kata/552564a82142d701f5001228
*/

function discoverOriginalPrice(discountedPrice, salePercentage){
  let  x = (100 * discountedPrice) / (100 - salePercentage);
  return +x.toFixed(2);
}
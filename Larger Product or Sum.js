//Larger Product or Sum
// https://www.codewars.com/kata/larger-product-or-sum/train/javascript
function sumOrProduct(array, n) {
 array = array.sort((a,b)=>a-b);
 let sum = 0;
 let pr = 1;
 for (let i = 0; i < n; i++){
   pr *= array[i];
   sum += array[array.length - 1 - i];
 }
 return (pr > sum) ? 'product' : (pr === sum) ? 'same' : 'sum';
}
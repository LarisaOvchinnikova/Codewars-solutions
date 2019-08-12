// Incrementer
// https://www.codewars.com/kata/incrementer/train/javascript

function incrementer(nums) {
  let arr = nums.map((el, index) => (el + index + 1) % 10);
  return  arr;
}
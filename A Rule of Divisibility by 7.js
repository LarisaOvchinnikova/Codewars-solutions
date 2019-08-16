// A Rule of Divisibility by 7
// https://www.codewars.com/kata/a-rule-of-divisibility-by-7/train/javascript

function seven(m) {
  let k = 0;
  while (m > 99) {
    m = Math.trunc(m / 10) - 2 * (m % 10);
    k++;
  }
  return [m, k];
}
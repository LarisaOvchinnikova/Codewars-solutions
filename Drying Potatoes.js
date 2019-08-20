// Drying Potatoes
// https://www.codewars.com/kata/58ce8725c835848ad6000007
function potatoes(p0, w0, p1) {
    let w = w0 * (100 - p0)/100;
    let ps = 100 - p1;
    return Math.trunc(100 * w / ps);
}
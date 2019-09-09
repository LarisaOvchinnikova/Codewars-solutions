//Find Screen Size
//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f
function findScreenHeight(width, ratio) {
    let i = ratio.indexOf(':');
    let w = +ratio.slice(0,i);
    let h = +ratio.slice(i+1,ratio.length);
    let x = width*h/w;
    return `${width}x${x}`;
}
//Functions of Integers on Cartesian Plane
//https://www.codewars.com/kata/559e3224324a2b6e66000046
function sumin(n) {
    let s = 0;
    for (let i = 1; i <=n; i++){
      for (let j = 1; j <=n; j++){
        if (i < j) s +=i ; else s+=j;
      }
    }
    return s;
}
function sumax(n) {
  let s = 0;
    for (let i = 1; i <=n; i++){
      for (let j = 1; j <=n; j++){
        if (i > j) s +=i ; else s+=j;
      }
    }
    return s;
}
function sumsum(n) {
    let s = 0;
    for (let i = 1; i <=n; i++){
      for (let j = 1; j <=n; j++){
        s += i+j;
      }
    }
    return s;
}
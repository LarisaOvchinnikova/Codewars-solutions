function breakChocolate(n,m) {
 if(n * m <= 1 ) return 0;
 let res = (n - 1) + n * (m - 1);
 return res;
}
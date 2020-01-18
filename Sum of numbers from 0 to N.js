//Sum of numbers from 0 to N
//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let s = 0; let str = '';
    for (let i=0; i <=count; i++){
    s+=i; str = str + i+ '+';
    }
    return (count === 0)? '0=0' : (count < 0)? `${count}<0`: str.slice(0,-1) + ' = ' + s;;
  };

  return SequenceSum;

})();
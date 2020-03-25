// Order of weight
//https://www.codewars.com/kata/59ff4709ba2a14501500003a

function arrange(arr){
let g = arr.filter(el=>el[el.length-1] === 'G' && el[el.length-2] !== 'K')
           .sort((a, b)=>a-b)
           .map(el=>+el.slice(0,-1) * 0.001);
let kg = arr.filter(el=>el[el.length-1] === 'G' && el[el.length-2] === 'K')
            .sort((a, b)=>a-b)
            .map(el=> +el.slice(0,-2));
let t = arr.filter(el=>el[el.length-1] === 'T')
           .sort()
           .map(el=>+el.slice(0,-1) * 1000);
let c = g.concat(kg, t).sort((a, b)=>a-b);

for (let i = 0; i <g.length; i++){
  c[i] = Math.trunc(c[i] * 1000)  + 'G'
}
for (let i = g.length; i <g.length + kg.length; i++){
  c[i] = c[i]  + 'KG'
}

  for (let i = g.length + kg.length; i <c.length; i++){
  c[i] = c[i] /1000 + 'T'
}
  return c;
}
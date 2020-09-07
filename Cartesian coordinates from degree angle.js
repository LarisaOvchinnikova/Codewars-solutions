//Cartesian coordinates from degree angle
//https://www.codewars.com/kata/555f43d8140a6df1dd00012b
function coordinates(degrees, radius) {
  return [+(radius * Math.cos(Math.PI * degrees/180)).toFixed(10),
          +(radius * Math.sin(Math.PI * degrees/180)).toFixed(10)]
}
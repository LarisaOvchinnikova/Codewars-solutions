//Bin to Hex and back
//with parseInt (doesn't allowed in this kata, but useful for training method)

function binToHex (binaryString) {
  let dec = Number.parseInt(binaryString,2);
  let hex = dec.toString(16);
  return hex;
}

function hexToBin (hexString) {
 let dec = Number.parseInt(hexString,16);
  let bin = dec.toString(2);
  return bin;
}
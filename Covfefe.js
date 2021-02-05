//Covfefe
// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a
function covfefe(str){
  return (str.includes('coverage')) ? str.replace(/coverage/gi,'covfefe') : str +' covfefe';
 }


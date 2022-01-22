// match - vai extrair coisas do texto (como se fosse um exec, ou test), 
// porem daqui pegamos da string para a expReg.
// replace - vai pegar a exp e trocar o dado dela por um outro que quiseremos

const { texto } = require('./base');
const regExp1 = /João|Maria/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
// console.log(texto.replace(/(João|Maria)/gi, function(input){
//     return input.toUpperCase();
// }));

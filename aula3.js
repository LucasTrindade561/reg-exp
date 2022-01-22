const { texto, arquivos } = require('./base');

/* 
    * (opcionais) 0 ou mais vezes {0,} --- ou seja, pode nao aparecer porem pode fazer a funcao do do + tbm
    + (obrigatório) 1 ou mais vezes {1,}
    ? (opcionais) 0 ou 1 vez {0, 1} --- ou seja, pode ou nao aparecer
    {qntVezes, maxVezes} --- podemos setar um número específico de vezes
    {10, 0} --- no minimo 10
    {, 10} --- de 0 a 10
    {5, 10} --- de 5 a 10
    {x} --- quantas vezes que for
    
    \ caractere de escape
*/

// console.log(texto);
// const regExp1 = /jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;
const regExp3 = /\.(jpe?g)/gi;


for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp3);
   
    // if(!valido) continue;

    console.log(arquivo, valido);
}

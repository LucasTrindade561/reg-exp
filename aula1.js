// Pq usamos expressões regulares?
// Usamos como um padrão para encontrar coisas dentro de uma string

// Exemplo
// g - global (encontra todas as ocorrencias)
// i - insensitive (checa tanto maiusculas quanto minusculas na expressao)
// () - usado para criar grupos
// | - ou

const { texto } = require('./base');

const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
const found = regExp1.exec(texto)// exec = vai extrair coisas do texto

// console.log(regExp1.test(texto)); // test = checar se existe a palavra dentro do texto
if(found) {
    console.log(found[0]);  
    console.log(found[1]);
    console.log(found[2]);  
}


const { alfabeto } = require('./base');

// [abc] --- conjuntos (ou seja, qualquer coisa que esta ali dentro) || [^] -> negação
// [min-max] --- de x a y || [^min-max] -> negação

// Atalhos
// \w --- a-zA-Z0-9 --- para achar
// \W --- a-zA-Z0-9 --- para não achar
// \d --- 0-9 --- para achar
// \D --- 0-9 --- para não achar
// \s --- encontra todos os tipos de espaço em branco, espaço, tabulação, avanço de página, quebra de linha
// \S --- negação

console.log(alfabeto);
// console.log(alfabeto.match(/[^abc123]+/g));
console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[a-k]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));
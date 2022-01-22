const { lookahead } = require('./base');

// console.log(lookahead);
// console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookhead, Negative lookhead, Positive lookbehind e Negative lookbehind = (como se fosse um if)
// Eles vão checar as frases, procurando determinada palavra, depois de chacagem que ira acontecer a 
// expressao regular.

// Lookhead --> vai checar na frente de sua frase
// Lookbehind --> vai checar atras da sua frase

// Positive lookhead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookhead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookhead (frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookhead (frases que NÃO tem inactive)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive lookbehind (frases que começam com online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));

// Negative lookbehind (frases que NÃO começam com online)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf =`
012.250.796-10
111.111.111-11
999.999.999-99
aaa.bbb.ccc-dd
000.000.000-01
111.222.333-32
147.285.963-10
`;

// Nao pega nenhuma sequencia de numeros
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));

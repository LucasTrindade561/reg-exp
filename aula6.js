const { cpfs, cpfs2 } = require('./base');

// ^ --> começa com
// $ --> termina com
// [^] --> negação
// m - multiline --- ele vai checar por linha, ou seja, vai ter começo e fim de linha
// com isso é perfeito para validar um campo de um formulario, pois ele é muito preciso

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
// console.log(cpf.match(cpfRegExp));
// console.log(cpfs.match(cpfRegExp));


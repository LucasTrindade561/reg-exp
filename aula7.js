const { html2 } = require('./base');

// \w --> a-z A-z 0-9
// $1 $2 $3 --> retrovisores \1
// * = pegar tudo (em ingles dotAll)
// ?: --> pedir para nao ser contado como retrovisor

//                         \1
// console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHAHA $3 HAHAHA $4'));
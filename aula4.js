const { html } = require('./base');

console.log(html);

// greedy --- vai pegar tudo oq tiver dentro inclusive oq a gnt pede para ser o fechamento
console.log(html.match(/<.+>.+<\/.+>/g));

// non-greedy --- assim ele vai obdecer oq nos pedimos e vai selecionar o minimo possivel
console.log(html.match(/<.+?>.+?<\/.+?>/g));

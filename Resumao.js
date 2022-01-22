// para encontrar todas as palavras até com acento.
const palavrasRegExp = /([\wÀ-ú]+)/gim;

// não números (e com replace vc consegue recuperar apenas os numeros)
const naoNumerosRegEx = /\D/g; 

// Valida IP
const validaIpRegEx = /((25[0-5]|2[0-4][\d]|1[\d]{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][\d]|1[\d]{2}|[1-9]\d|\d)/g;;

// Checando se algo se parece com um cpf
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/gm;

// capturar o telefone (se tirar o ?, vai ser obrigatorio o dd e o nove na frente)
const capturarRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Validar senhas fortes
const validarSenhasFortes = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\}\{\[\]]).{8,}$/g;

// Validar e-mails
const validarEmailExemplo1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
const validarEmailExemplo2 = /[^\s]+@[^\s]+\.[^\s]+(\w+)*/g; // Permissiva, ou seja, vai aceitar varios emails que sao considerados invalidos
const validarEmailExemplo3 = /[^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+/g;
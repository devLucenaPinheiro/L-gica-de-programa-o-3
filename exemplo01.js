let mensagem = 'Olá eu sou uma "mensagem de texto"';
console.log(mensagem);

let oi = String("olá");
console.log(oi);

console.log(typeof String(0));

console.log(typeof 10);

console.log(typeof 10.3);

console.log(typeof false);

console.log(typeof true);

console.log(typeof 0);

console.log(typeof null);

let isValid = true;

console.log(typeof isValid);

//valores que são convertidos para falso no boolean: strings vazias" ", número 0,(se for 0.1 já é considerado true), valor undefined, NaN(not a number) e null(nulo) são considerados falsos. TODO resto quando convertido para boolean é true

console.log(Boolean(null));
console.log(Boolean(-2));
console.log(Boolean(0));
console.log(Boolean(undefined));

let semValor
console.log(semValor);  //variável está definida como undefined, pois ela não tem valor.

let n = parseFloat("olá");
console.log(n);
console.log(typeof n);  //o tipo da variável n é um número, mas ela é NaN pois não tem valor de número atribuido à ela

v = 30;
console.log(typeof v);
console.log(typeof(v.toString()));
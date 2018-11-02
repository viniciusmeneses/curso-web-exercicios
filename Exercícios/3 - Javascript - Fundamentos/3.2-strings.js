const nome = 'Vinicius';

console.log(nome.charAt(4)); //'c'
console.log(nome.charCodeAt(4)); //valor do caracter na tabela unicode
console.log(nome.indexOf('n'));

console.log(nome.substring(4, 9)); //não inclui o último índice
console.log(nome.concat(' Meneses'));

console.log(nome.replace(/\w/g, 'a'));

console.log('Vinicius,Meneses,Nicole'.split(',')); //split transforma em array
console.log('Vinicius,Meneses,Nicole'.split(/\,/g));


//Template Strings - Conta tabulação!!!
const up = str => str.toUpperCase();

var templateNome = `Meu nome 
    é ${up(nome)}!`;
console.log(templateNome);
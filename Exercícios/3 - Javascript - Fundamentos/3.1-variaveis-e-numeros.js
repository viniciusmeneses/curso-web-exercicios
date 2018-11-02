//let: não pode ser declarada mais de uma vez, mas pode atribuir novo valor.
//var: pode ser declarada mais de uma vez e pode atribuir novos valores;
//const: constante, não pode ser atribuido outro valor.

let nota1 = 7;
let nota2 = 8;
let nota3 = 4;
let nota4 = 10;

var total = nota1 + nota2 + nota3 + nota4;
const media = total / 4;

console.log(media);
console.log(typeof media + "\n");


let totalPotencia = Math.pow(total, 4); //Math.pow(num, elevaçao) - eleva um número
console.log(totalPotencia, Math.PI);

console.log(Number.isInteger(media));
console.log(Number("2.3"));

console.log("3" * 5); //Realiza a operação
console.log(media.toString());
console.log(media.toFixed(1)); //Somente uma casa depois da virgula
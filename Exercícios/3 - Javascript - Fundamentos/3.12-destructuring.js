/*
Operador de destructuring: introduzido no ES 2015.
Tira da estrutura algo...
Tira elementos de dentro de um objeto ou array a partir do operador destructuring

Destructuring para objeto: {}
Destructuring para array: []
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua...',
        numero: 1000
    }
};

//operador destructuring
//{ nome, idade } - operador destructuring, utilizando chaves para retirar do objeto as proprieades nome e idade!!!
const { nome, idade } = pessoa;
console.log(nome, idade);

//destructuing: vai tirar as propriedades nome e idade do objeto pessoa, e salvar nas constantes n e i respectivamente!
//{ nomeProp: nomeNovoVar } = obj
const { nome: n, idade: i } = pessoa; 
console.log(n, i);

//Se a propriedade não exisitir
//{ nomeProp = valorSeNaoExistir } = obj
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

//objeto aninhado
//só retira do objeto as proprieades logradouro, numero e cep!! Endereço não ocorreu destructuring
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, cep, numero);


//-------------------//
//Destructuring - ARRAY:
//Tirando elementos de um array e salvando em varíaveis criadas
const [a] = [10];
console.log(a);

//Destruturando o array [10, 7, 9, 8] e salvando seus elementos nas variáveis n1, n3, n5 e n6 (é salvado na variável do seu respectivo indice)
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

//array aninhados
//Primeiro ignorado, segundo elemento é um array, ignroa o primeiro elemento do segundo array e pega o segundo
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];


//-----------------//
//Destructuring em função:
//recebe um objeto por parâmetro, e automaticamente desestrutura o objeto retornando os atributos min e max do objeto pronto para serem usados sem utilizar ponto
//caso nao receba algum dos parâmetros: min vai ser 0 e max vai ser 1000
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
//recebendo o objeto por parâmetro para fazer o destructuring
const obj = { max: 50, min: 40 };
console.log(rand(obj));


//utilizando o desctructuring para receber array por parâmetro
function rand2([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min]; //troca os valores pelo destructuring
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand2([50, 40]));
console.log(rand2([, 100]));
console.log(rand2([]));
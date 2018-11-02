const imprimirSoma = function (a, b) {
    return a + b;
}

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(3, 2), imprimirSoma(2, 3));

//retorno implicito arrow function
//executa somente uma sentença de código (uma linha) e retorna o resultado dessa linha automaticamente
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));
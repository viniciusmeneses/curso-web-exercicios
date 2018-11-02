// Receber parâmetros variáveis antes do ES6
function soma() {
    let soma = 0;
    // Recuperar/pegar parâmetros variáveis 
    // (que pode receber determinado número de 
    // paramâmetros que varia de execução pra execução)
    for (let i in arguments) {
        // arguments contém todos os parâmetros passados na execução em forma de array
        soma += arguments[i]
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 4, 66, 13));
console.log(soma(2, 3, 'Teste'));
console.log(soma('a', 'b', 'c'));


// Parâmetro padrão (antes e depois do ES6)

// Antes do ES6 - Estratégia 1
function soma2(a, b, c) {
    // Se o parâmetro for falsy, recebe 1 
    a = a || 1;
    b = b || 2;
    c = c || 3;
    return a + b + c;
}

// 0 é um valor falsy - entao vai usar valor padrão
console.log(soma2(), soma2(3), soma2(4, 2, 2), soma2(0, 0, 0));

// Estratégia 2, 3 e 4
function soma3(a, b, c) {
    // Se for undefined...
    a = a !== undefined ? a : 1;
    //dentro de arguments existe o indice 1?
    b = 1 in arguments ? b : 2;
    //Se nao for um número...
    c = isNaN(c) ? 3 : c;
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(4, 2, 2), soma3(0, 0, 0));


// PARÂMETRO PADRÃO NO ES6 (MELHOR FORMA):
// (parâmetro = valorPadrao, ...)
function soma4(a = 1, b = 2, c = 3) {
    return a + b + c;
}

console.log(soma4(), soma4(3), soma4(4, 2, 2), soma4(0, 0, 0));
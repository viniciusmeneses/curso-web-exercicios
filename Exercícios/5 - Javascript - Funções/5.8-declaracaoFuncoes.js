//quando é declarada com o método function declaration
//é possivel executar a função antes mesmo dela ter sido criada
//pq o interpretador do JS vai ler primeiro as funçoes e depois executar o código
console.log(soma(3, 4))

console.log(sub(3, 4)) //erro - quando é criada através do function expression, ela só poderá ser chamada depois de declarada, porque a constante que foi atribuida nao foi criada ainda
console.log(mult(3, 4)) //erro

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expression - facilita o debug, mas pouco usada
const mult = function mult(mult) {
    return x * y
}


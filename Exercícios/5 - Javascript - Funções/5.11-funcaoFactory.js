//função que retorna um objeto

function criarPessoa() {
    //retorna uma instancia de objeto - quando usada a notaçao literal, é instanciado um objeto
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

//Cria uma nova instancia de pessoa sempre que chamada
console.log(criarPessoa())


function criarProduto(nome, preco) {
    return {
        //nao precisa colocar nome: nome por causa do parâmetro
        nome,
        preco,
        desconto: 0.1
    }
}
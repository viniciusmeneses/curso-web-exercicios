//Uma classe é a mesma coisa que uma função, só muda a sintaxe

//Função construtora sempre deve ser criada com function
//Quando usamos this dentro de uma função construtora, estamos dizendo que queremos que seja visível o atributo/método fora da funçao
function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    //pertence apenas à função Carro, não é acessível fora
    let velocidadeAtual = 0

    //método publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    //método publico
    //quando criado um atribuito privado, o usuário não pode mexer nesse atributo
    //assim, criamos um método get para retornar o valor do atributo privado
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
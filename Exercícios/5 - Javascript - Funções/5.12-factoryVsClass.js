//Classe: é uma função escrita de uma forma diferente
//Através dela é possível instanciar objetos e é parecida com OO em outras linguagens

//Classe:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//Função factory:
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

//Quando utilizamos um objeto criado com a classe/função construtora num método que altera o valor do this
//Comecará a dar problemas, pois os atributos dentro de um objeto instanciado a partir da classe são acessados através do this, e o valor do this será alterado
//Quando utilizamos uma função factory nesse caso, como nao usamos o this para referenciar o 'atributo' do objeto retornado, não irá dar problema


//Função Construtora:
function PessoaFunc(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new PessoaFunc('Nicole')
p3.falar()

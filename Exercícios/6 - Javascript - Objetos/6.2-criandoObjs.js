//Literal
const obj1 = {}

//Object
console.log(typeof Object, typeof new Object)
const obj2 = new Object()

//Funcoes construtoras
function Produto(nome, preco, desconto) {
    //quando usa this: atributo fica público podendo ser alterado e visualizado
    this.nome = nome
    this.getPrecoComDesconto = () => {
        //preço e desconto estão encapsulados (escondidos)
        //escopo somente dentro da função e não disponíveis fora
        //sem o this = privados!!!
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('caneta', 300, 0.15)
console.log(p1.getPrecoComDesconto())

//Funcão factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 500, 2)
console.log(f1.getSalario())

//Object.create - Utilizado em herança
const filha = Object.create(null)
filha.nome = 'Nicole'
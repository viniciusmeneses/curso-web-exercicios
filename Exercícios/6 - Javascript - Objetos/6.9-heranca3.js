const pai = { nome: 'Pedro', corCabelo: 'Preto' }

//cria um novo objeto tendo automaticamente o objeto passado por parâmetro como protótipo/pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

//Primeiro parâmetro vai ser o objeto pai e o segundo vai ser os atributos que o novo objeto que está sendo criado vai receber
const filha2 = Object.create(pai, {
    //key: { options }
    nome: { 
        value: 'Niih',
        writable: false,
        enumerable: true
    }
})
console.log(filha2.nome)
filha2.nome = 'Nicole' //Não altera pois o atributo está writable = false
console.log(filha2.nome, filha2.corCabelo)

//mostra somente os atributos próprios do objeto, mas ainda possuem os atributos do pai
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    //.hasOwnProperty(key): verifica se determinado atributo pertence ao próprio objeto ou veio através da herança
    console.log(key, filha2.hasOwnProperty(key))
}
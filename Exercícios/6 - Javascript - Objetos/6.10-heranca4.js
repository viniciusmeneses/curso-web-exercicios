function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//Quando criamos um objeto através de uma função construtora
//O prototype do objeto aponta para prototype da função e não para Object.prototype
console.log(MeuObjeto.prototype === obj1.__proto__)

//Qualquer objeto que for criado a partir da função construtora, vai conter um atributo nome no pai podendo ser acessado
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Nicole'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Mudando a referencia do protótipo do obj3 de Object.prototype para MeuObjeto.prototype
obj3.falar()



//Resumindo... - http://prntscr.com/krfvmo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
//A função também possui um atributo __proto__ que aponta para o Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //Chegou ao nível máximo da cadeia de protótipos
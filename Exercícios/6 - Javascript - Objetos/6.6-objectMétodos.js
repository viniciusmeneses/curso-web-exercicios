//Objeto é uma coleção dinâmica de chave e valor
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Retorna as chaves do objeto em formato array
console.log(Object.values(pessoa)) //Retorna os valores do objeto

console.log(Object.entries(pessoa)) //Retorna o conjunto de chave e valor em formato array
//Cada elemento do array será um atributo e dentro dele terá outro array com a chave e o valor

//usando destructuring junto com foreach e object.entries
Object.entries(pessoa).forEach(([ chave, valor ]) => {
    console.log(`${chave}: ${valor}`)
})

//define uma propriedade de um objeto
//(obj, propKey, options)
//options é um objeto que vai definir caracteristicas do atributo
Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: false, //a propriedade será listada?
    writable: false, //a propriedade poderá ser alterada?
    value: '23/06/2001' //valor que vai receber
})

//como definimos que ela nao poderá ser alterada...
pessoa.dataNasc = '01/01/2001'
console.log(pessoa.dataNasc)

//nao será listada em metodos como o Object.keys
console.log(Object.keys(pessoa))

//Object.assign (ES6)
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}

//(destinoObj, ...outrosObj)
//o objeto de destino recebe os atributos dos demais objetos concatenando-os
//retorna um objeto que é o resultado da concatenacao de todos os objetos
const obj = Object.assign(dest, o1, o2)
console.log(obj)
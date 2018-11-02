console.log(module.exports === this)
console.log(module.exports === exports)

//Todos eles apontam para o mesmo objeto
this.a = 1
exports.b = 2
module.exports.c = 3

//Mesmo atribuindo null para limpar a referencia, module.exports ainda contém a referencia para o objeto exportado
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

//Porem, quem é retornado de verdade é o module.exports
console.log(module.exports)


//Jeito certo de exportar:
module.exports = { publico: true }
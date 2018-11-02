//Object.preventExtensions(obj) - Previne que seja adicionados novos atributos ao objeto
//Pode excluir atributos e alterar, mas nao pode adicionar/estender
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

//testa se o objeto pode ser estendido
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar!' //tentando estender o objeto
delete produto.tag
console.log(produto)


const pessoa = { nome: 'Juliana', idade: 35 }
//Object.seal(obj) - previne que sejam adicionados e excluidos atributos, mas pode alterar seus valores
Object.seal(pessoa)

//testa se o objeto está selado
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 10
console.log(pessoa)

//Object.freeze(obj) - previne que sejam adicionados, excluídos e alterados seus atributos!!!
// pessoa -> 123 -> {...}
const pessoa = { nome : 'João' }
pessoa.nome = 'Pedro'

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Nicole' }


Object.freeze(pessoa) //objeto foi congelado, seu valor nao poderá ser mudado, ele será constante e não poderá ser mudado de jeito nenhum
pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome, pessoa.end)
//continua sendo 'Pedro', mesmo tentando atribuir outro valor, pq está congelado


const pessoaConstante = Object.freeze({ nome: 'Joaum' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
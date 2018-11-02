//arr.reduce(callback [, valorInicial]) - Transforma um array agregando os valores e será retornado no final
//Ele terá um valor inicial, e um valor acumulado no callback que será o valor que o callback interior gerou
//Se nao for passado nenhum valorInicial, o primeiro elemento será o acumulador e o segundo o valor atual

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Nicole', nota: 9.2, bolsista: true },
    { nome: 'Vinicius', nota: 9.8, bolsista: false },
    { nome: 'Pedro', nota: 8.7, bolsista: true }
]

//mapeia o array e retorna somente as notas
const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual)
console.log(resultado)


const resultado2 = alunos.map(a => a.nota).reduce((acumulador, atual) => acumulador + atual, 10)
console.log(resultado2)

//O reduce nao precisa sempre retornar um número, pode ser um objeto, array, etc...
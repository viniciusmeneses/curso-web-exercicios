const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Nicole', nota: 9.2, bolsista: true },
    { nome: 'Vinicius', nota: 9.8, bolsista: false },
    { nome: 'Pedro', nota: 8.7, bolsista: true }
]

//Todos os alunos são bolsistas?
const desafio1 = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador && atual)
console.log('Todos os alunos são bolsistas?', desafio1 ? 'Sim' : 'Não')


//Algum aluno é bolsista?
const desafio2 = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador || atual)
console.log('Algum aluno é bolsista?', desafio2 ? 'Sim' : 'Não')

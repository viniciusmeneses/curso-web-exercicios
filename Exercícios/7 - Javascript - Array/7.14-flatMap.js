//Extrair a nota de todos os alunos independente das turmas
const escola = [{ 
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Nicole',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Vinicius',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])) //o que queremos - um array com todas as notas

//flatMap: map associado com o concat
//Criando o flatMap:
Array.prototype.flatMap = function(callback) {
    //Passa um array vazio como this para o concat, e como parâmetro passa o resultado map com a callback
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
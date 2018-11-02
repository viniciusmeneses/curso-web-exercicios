// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                //Vai tentar parsear o JSON resolver a promise
                //Se der erro, vai rejeitar a promise passando o erro ocorrido
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Promise.all(array): recebe um conjunto de promessas dentro de um array por parâmetro
//Quando todas as promessas forem resolvidas/aceitadas, executa o then, se uma der erro, executa o catch
//O valor passado para o then depois de todas serem resolvidas é um array que contém o valor passado por parâmetro no resolve de cada promise
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    //turmas === [ [ alunosDaTurmaA ], [ alunosDaTurmaB ], [ alunosDaTurmaC ] ]
    //[].concat(...turmas) === [].concat([ alunosDaTurmaA ], [ alunosDaTurmaB ], [ alunosDaTurmaC ])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))
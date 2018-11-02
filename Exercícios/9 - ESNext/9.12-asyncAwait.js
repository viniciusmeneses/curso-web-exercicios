//com promises...
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

//Recurso do ES8
//Async/await: Objetivo de simplicar o uso de promises...

//A palavra await só vai funcionar com uma função marcada/declarada com async
//Sempre uma função async retorna um AsyncFunction que deverá ser resolvida utilizando then para ter acesso ao verdadeiro retorno da função...
let obterAlunos = async () => {
    //Sempre que uma função retornar uma promise, podemos utilizar a palavra-chave await
    //Assim, a função só irá para o próximo passo quando a promessa da função tiver sido resolvida/rejeitada
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
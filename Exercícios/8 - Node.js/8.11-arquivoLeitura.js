//fs (filesystem) é um módulo core do node
//Através dele podemos acessar arquivos do sistema, escrever e lê-los
const fs = require('fs')

// __dirname é uma constante presente no node que contém o caminho do diretorio atual
const caminho = __dirname + '/8.11-arquivo.json'


//Método síncrono: se for muito pesado vai travar o event loop
//síncrono trava a aplicação enquanto estiver lendo
//não recomendado
//fs.readFileSync(path, encoding)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assíncrono: nao trava o event loop
//fs.readFile(path, encoding, callback)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//LER ARQUIVO JSON MAIS FACILMENTE
//SO FUNCIONA PRA JSON
//Converte o JSON automaticamente para objeto
const config = require('./8.11-arquivo.json')
console.log(config.db)



//LEITURA DE PASTA:
fs.readdir(__dirname, (err, arquivos) => {
    console.log(`Conteúdo em ${__dirname}:`, arquivos)
})
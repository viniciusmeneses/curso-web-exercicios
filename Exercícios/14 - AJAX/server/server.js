const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Vai servir os arquivos estáticos que estao fora da pasta server
app.use(express.static('..'))
//Caso chege uma req com corpo de url encoded (form), vai fazer o parser..
app.use(bodyParser.urlencoded({ extended: true }))
//Se chegar um JSON, faz parser também pra obj
app.use(bodyParser.json())

//Módulo que vai servir para receber arquivos enviados do front (upload)
const multer = require('multer')

//Configurando o nome e onde vai salvar o arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        //Vai salvar dentro da pasta callback
        callback(null, '../upload')
    },
    filename: function (req, file, callback) {
        //Nome: data-atual_nome-original
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
//Configurando o upload, dizendo que o arquivo vai ser recebido dentro do campo input com name `arquivo`
const upload = multer({ storage }).single('arquivo')

//Criando um endpoint para receber o arquivo no metodo post
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Concluido com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body - recebendo no corpo
    //req.query - recebendo na URL por meio de query string (index.html?test=1&test2=2)
    //req.params - recebendo na URL por meio de parâmetro (/test/:num)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Rodando...'))
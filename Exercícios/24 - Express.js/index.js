const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacao')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.use(bodyParser.text())
app.use(bodyParser.json())

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(saudacao('Vinicius'))

// A ordem das funções importa!!!

// Aplicado para qualquer tipo de requisição
// ou app.all()
app.use((req, res, next) => {
  console.log('Antes')
  next()
})

app.post('/corpo', (req, res) => {
  // let corpo = ''

  // // Quando receber dados na requisiçao, concatena ao corpo
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // // Quando terminar de receber os dados, response enviado o corpo
  // req.on('end', function() {
  //   req.send(corpo)
  // })

  res.send(req.body)
})

// Parametros na URL no formato query string
app.get('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

// Parametros na URL
app.get('/cliente/:id', (req, res) => {
  res.send(`Cliente: ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
  // res.send('<h1>Estou bem!</h1>')

  // Recebe um objeto/array JS que será convertido em JSON
  // res.json({
  //   name: 'iPad 32gb',
  //   price: 3000
  // })
  res.json({
    data: [
      { id: 7, name: 'Nicole', pos: 1 },
      { id: 32, name: 'Vinicius', pos: 2 }
    ],
    count: 2,
    skip: 0,
    limit: 2
  })

  console.log('Depois')
  next()
})

app.listen(3000, () => {
  console.log('Server listening at port 3000')
})

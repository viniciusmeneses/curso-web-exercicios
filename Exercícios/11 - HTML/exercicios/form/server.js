const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    //Quando usamos method GET no form, os dados são passados pela URL:
    //console.log(req.query) - Pega os dados que estão na URL
    res.send('<h1>Parabéns, usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.body, req.params.id)
    res.send('<h1>Parabéns, usuário alterado!</h1>')
})

app.listen(3003)
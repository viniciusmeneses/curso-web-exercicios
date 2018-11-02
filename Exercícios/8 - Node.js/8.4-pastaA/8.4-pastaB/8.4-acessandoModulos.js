//importando um módulo sem ser de terceiros fora da pasta node_modules
//../ - sai de uma pasta
//../ sai da pastaB
//../../ - sai da pastaB e da pastaA
const moduloA = require('../../8.2-moduloA')
console.log(moduloA.bemVindo)

//Acessando modulos dentro de node_modules
//ele procura um arquivo index.js dentro da pasta do módulo dentro de node_modules
const _ = require('lodash')
console.log(_.random(0, 1000))

//Podemos também importar os módulos previamente instalados junto com o node (core):
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

//Importando de outra pasta no mesmo diretório com index.js
const c = require('./8.4-pastaC')
console.log(c.ola)
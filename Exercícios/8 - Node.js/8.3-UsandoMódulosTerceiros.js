//Usando módulos de terceiros utilizando NPM
//NPM - Node Package Manager
//npm i loadash

//instalar módulo global: npm i -g nodemon

//Sem caminho relativo: vai procurar um arquivo index.js dentro de node_modules
//Geralmente usa-se _ como nome da constante quando for importar o lodash
const _ = require('lodash')

setInterval(() => console.log(_.random(1, 1000)), 1000)
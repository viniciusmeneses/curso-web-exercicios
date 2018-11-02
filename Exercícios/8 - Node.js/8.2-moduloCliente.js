//Importando módulos no node.js
//Utilizando CommonsJS

//./ - caminho relativo
//requerindo os módulos
//Atribuindo o valor exportado nos módulos nas respectivas constantes
const moduloA = require('./8.2-moduloA')
const moduloB = require('./8.2-moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
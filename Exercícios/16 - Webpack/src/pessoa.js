//Sistema de modulos CommonJS
// require(...)
// module.exports = ...

//Usando sistema de módulos do ECMAScript
//NÃO SUPORTADO NATIVAMENTE PELO NODE!!!
//WEBPACK SUPORTA!!!
// import ... from ...
// export default ...

import './modulos/moduloA'

// module.exports = class Pessoa {
export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}
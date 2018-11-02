//Exportando um módulo no node para ser utilizado em outro arquivo

console.log(this)
//this === exports === module.exports

//Criando atribudo dinamicamente para exportar...
//Método 1
this.ola = 'Fala pessoal!'

//Método 2
exports.bemVindo = 'Bem vindo!'

//Método 3
module.exports.ateLogo = 'Até logo!'
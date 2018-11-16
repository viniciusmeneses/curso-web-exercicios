module.exports = function saudacao(nome) {
  // Retornando uma função middleware
  return function(req, res, next) {
    console.log(`Seja bem vindo ${nome}!`)
    next()
  }
}

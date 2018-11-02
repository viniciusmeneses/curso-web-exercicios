//Toda função tem um atributo chamado .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Adicionando novos atributos/funcoes dentro de um determinado
//prototótipo, assim, quando um novo objeto for instanciado a partir dessa função
//ele terá esses novos atributos/funcões
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Nicole'.reverse())


Array.prototype.first = function() {
    //acessamos um array/string/objeto... dentro de um protótipo a partir do this
    return this[0]
}
console.log([1, 2, 3, 4].first())
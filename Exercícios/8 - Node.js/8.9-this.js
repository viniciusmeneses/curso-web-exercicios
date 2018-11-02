console.log(this === global) //aponta para module.exports
console.log(this === module)

console.log(this === module.exports) //fora de uma função aponta para module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro da function')
    console.log(this === exports) //false!!!
    console.log(this === module.exports) //mesma referencia do exports

    console.log(this === global) //true!!! dentro de uma função aponta para o objeto global
}
logThis()
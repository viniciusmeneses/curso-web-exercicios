//arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function (this)
const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(text = 'Node') {
    console.log(text)
}
log()

//operador rest/spread (rest em uma função: agrupar os parâmetros passados em um array)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5, 6))

/*const total1 = (...numeros) => numeros.reduce((total, numero) => total + numero)
console.log(total1(2, 3, 4, 5))*/
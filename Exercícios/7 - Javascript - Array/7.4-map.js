//array.map(callback): serve para fazer uma transformação no array
//ele mapeia o array pra outro array do mesmo tamanho com os dados transformados
//nao modifica o array principal, gera um novo array!!!

const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(function(value) {
    //obrigatoriamente deve retornar um valor
    return value * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
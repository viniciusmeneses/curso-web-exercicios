const fabricantes = ['mercedes', 'audi', 'bmw']

//Callback: é quando passamos uma função para outra função,
//e quando determinado evento acontecer, essa função passada vai ser chamada de volta

function imprimir(value, index) {
    console.log(`${index + 1} - ${value}`)
}

//imprimir é um função de callback passada para o forEach
//a cada índice, a funçao imprimir vai ser chamada de volta
fabricantes.forEach(imprimir)

fabricantes.forEach(value => console.log(value))



//OUTRO EXEMPLO:
const notas = [ 7.7, 5.3, 2.3, 3.4, 9.0 ]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
// Se o retorno da função de callback for true, inclui o elemento no novo array
// Se for falso, não inclui no novo array

// O callback é chamado a cada novo elemento (evento) retornando verdadeiro ou falso
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

const notaCallback = nota => nota < 7
const notasBaixas4 = notas.filter(notaCallback)
console.log(notasBaixas4)


//OUTRO EXEMPLO DE CALLBACK NO DOM:
//Função de callback é executada quando um evento ocorre, no caso, click:
document.getElementsByTagName('body')[0].onclick = function(e) {
    console.log('O evento foi disparado!')
}
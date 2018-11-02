const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove o ultimo elemento
pilotos.push('Viado') //adiciona elemento na ultima posicao

pilotos.shift() //remove o primeiro elemento
pilotos.unshift('Massa') //adiciona elemento na primeira posicao


//splice:
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Vestappen')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)


//slice: pega um pedaço do array
//retorna um novo array - não modifica o original:

console.log(pilotos.slice(2), pilotos.slice(2, 4))
//pega o índice inicial até o um indice antes do ultimo

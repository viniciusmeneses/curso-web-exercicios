//arr.concat(elements): vai concatenar os elementos passados por parâmetro no array original
//Não modifica o array original, gera um novo!!!
//Pode também ser passado elemento por elemento e arrays inteiros

const filhas = ['Nicole', 'Luna']
const filhos = ['Vinicius', 'Rodrigo']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)

console.log(['a', 'b'].concat([1 ,2], [3, 4], 5, [[6, 7]]))
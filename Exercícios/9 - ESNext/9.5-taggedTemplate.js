// tagged template: processa o template string dentro de uma função
function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string!'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
//usando essa sintaxe:
//passamos a template string como parâmetro, separando por parâmetro as partes 
//da string que são textos e os valores que são as variaveis interpoladas (passados entre ${})
//o resultado final é a string retornada da função
console.log(tag `${aluno} está ${situacao}.`)

/*
Índices alternados entre parte e valor:
   0      2      4
[ '', ' está ', '.' ]

    1         3
[ 'Gui', 'Aprovado' ]
*/


//EXEMPLO 2:
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        //Se nao for um número, retorna o próprio valor, se for numérico retorna o numero com casas decimais
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
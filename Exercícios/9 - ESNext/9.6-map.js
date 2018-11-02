//Map é um conjunto de chave e valor dinâmico
//É parecido com os objetos, mas o map possui uma maior flexibilidade na chave
//A chave no map pode ser uma function outro objeto, etc... enquant no objeto comum, só pode ser um valor literal

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

//console.log(tecnologias.react) não funciona, não é um objeto!!!
console.log(tecnologias.get('react'))


const chaveVariadas = new Map([
    //[chave, valor]
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chaveVariadas.forEach((value, key) => {
    console.log(key, value)
})

//verifica se existe uma chave no map igual à passada por parâmetro
console.log(chaveVariadas.has(123))

//remove a chave passada por parâmetro do map
console.log(chaveVariadas.delete(123)) //retorna true ou false

//quantidade de elementos dentro do map
console.log(chaveVariadas.size)
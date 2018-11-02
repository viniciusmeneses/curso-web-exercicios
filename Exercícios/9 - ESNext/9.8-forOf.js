//for of - intera sobre os valores
//utilizamos for of para percorrer map e set também!!!

for (let letra of 'Cod3r') {
    console.log(letra)
}



const assuntosEcma = ['map', 'set', 'promise']
//for in
for (let i in assuntosEcma) {
    console.log(i)
    //intera sobre os índices (retornando os índices/chaves)
}

//for of
for (let assuntos of assuntosEcma) {
    console.log(assuntos)
    //retorna os valores e não os índices
}



const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false}]
])

for (let all of assuntosMap) {
    //imprime os arrays com chave e valor
    console.log(all)
}

for (let chave of assuntosMap.keys()) {
    //retorna somente as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    //retorna somente os valores
    console.log(valor)
}

for (let [key, value] of assuntosMap.entries()) {
    //retorna arrays com chave e valor e usa o destructuring para salvar os elementos nas constantes
    console.log(key, value)
}



const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
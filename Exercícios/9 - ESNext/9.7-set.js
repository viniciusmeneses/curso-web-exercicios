//set é um conjunto de valores que não aceita repetição e nao aceita indexação
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco') //ignorado porque já existe!!!

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')

const nomes = ['Vinicius', 'Nicole', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
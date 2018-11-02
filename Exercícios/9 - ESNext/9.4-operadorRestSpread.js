// operador rest (rest: juntar), spread: (espalhar)
//rest: em função quando passamos varios parametros e ele junta em um unico array

//usar spead com objetos
const funcionario = {
    nome: 'Maria',
    salario: 1200
}
//Pegando todos os atributos de funcionário e ESPALHANDO dentro de clone
//...obj: pega todos os atributos do objeto e copia para o objeto atual
//se alterarmos o clone, não vai mexer no objeto funcionario
const clone = { ativo: true, ...funcionario }
console.log(clone)

//Spread com arrays
const grupoA = ['João', 'Pedro', 'Gloria']
//pega todos os elementos do grupoA e espalha dentro do novo array (grupoFinal)
const grupoFinal = ['Nicole', ...grupoA, 'Rafaela']
console.log(grupoFinal)
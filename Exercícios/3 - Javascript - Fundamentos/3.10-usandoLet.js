var numero = 1
{
    //let cria escopo dentro de blocos de código {}, mesmo não sendo uma função
    let numero = 2
    //let só será vista dentro do bloco pois cria escopo local
    console.log('dentro', numero)
}
console.log('fora', numero)

/*
variáveis definidas com let, possuem escopo:
- global
- de função
- de bloco de código (escopo a mais do que o var!!!)
*/

//--------------------//

for (let i = 0; i < 10; i++) {
}
console.log(i)
//console.log(i) - erro, pois let possui escopo de bloco de código, é só visível dentro do bloco!
//se fosse criada com var, seria visível fora!

//---------------------//
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[6]()

//let cria escopo de código, porém devido ao conceito de closure
//não irá dar erro, pois a function lembra/guarda o valor de i para si quando foi definida, mostrando o valor i no momento da sua definição!

//----------------------//
//Hoisting não acontece com variáveis criadas com LET!!!

//-----------------------//
//Quando uma variável é criada com let/const no escopo global, ela não é acessivel através do window, mas continua sendo global
//se for declarada com var, ela vai ser acessível através do window e continua sendo global

//Variáveis e constantes criadas com let/const não vão diretamente para o window, mas continuam sendo globais
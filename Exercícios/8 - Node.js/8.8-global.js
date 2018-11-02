//global é o objeto global compartilhado do node.js
//console.log(global)

global.minhaApp = Object.freeze({
    saudacao() {
        return 'Olá!'
    },
    nome: 'Sistema Legal'
})

//Quando criamos uma propriedade no objeto global, todos os outros módulos terão acesso a esta propriedade
//Pois o global é um objeto compartilhado entre os módulos

//EVITAR FAZER ISSO!
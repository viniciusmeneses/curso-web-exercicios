//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj), Object.entries(obj))

//melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    //nome: nome,
    nome,
    //ola: function() {}
    ola() {
        return 'Bom dia!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//classe
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Viadaum!'
    }
}
console.log(new Cachorro().falar())
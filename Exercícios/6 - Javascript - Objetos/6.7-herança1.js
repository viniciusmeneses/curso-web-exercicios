//http://prntscr.com/krezfe
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//atributo __proto__ -> podemos acessar o objeto pai desse objeto/retorna o protótipo(objeto pai) do objeto
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) //true, porque quando um objeto é criado sem protótipo ele automaticamente herda o protótipo do Object
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //null - O protótipo do Object não possui nenhum objeto pai, por isso é null, ele é o protótipo de mais alto nivel


function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

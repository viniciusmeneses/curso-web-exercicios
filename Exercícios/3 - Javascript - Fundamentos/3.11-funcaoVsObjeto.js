console.log(typeof Object);
console.log(typeof new Object()); //Instanciando um objeto a partir de uma função (construtor)

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} //ES 2015 (ES6) - Forma diferente de construir uma função
console.log(typeof Produto);
console.log(typeof new Produto());

//A partir de uma função, é instanciado um objeto!
//class no JS é internamente uma função
// função arrow tem dois objetivos: 
// ser mais curta (sintaxe reduzida)
// this associado ao contexto que a função foi escrita

//SINTAXE:
let dobro = function (a) {
    return 2 * a
}

//sempre é uma função anônima, precisa armazenar em uma variável
dobro = (a) => {
    return 2 * a
}

//1 parâmetro: pode tirar os parenteses
//1 linha, pode tirar as chaves e o return vai acontecer automaticamente
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'



//THIS FIXO - BASEADO NO CONTEXTO EM QUE ARROW FUNCTION FOI ESCRITA:
function Pessoa() {
    this.idade = 0

    //A função arrow foi escrita dentro do contexto da função Pessoa
    //Contexto léxico: contexto físico onde ela foi escrita
    //Assim, o this aponta para a função pessoa, pois foi escrito dentro da função pessoa
    setTimeout(() => {
        this.idade++
        console.log(this.idade)
    }, 100)
}
new Pessoa()



//OUTRO EXEMPLO:

let comparaComThis = function (param) {
    console.log(this === param)
}
//global: objeto global do Node.js
comparaComThis(global)

const obj = {}
//this do comparaComThis aponta agora para obj
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
comparaComThis(global)



//ARROW FUNCTION:
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
//porque o this está referenciado o módulo (cada arquivo é um módulo no Node.js)
//e cada arquivo está dentro do contexto léxico de seu módulo, sendo assim:
//o this referencia o próprio módulo quando é criado uma arrow function sem contexto léxico anterior

//module.exports referencia o próprio módulo
comparaComThisArrow(module.exports)
comparaComThisArrow(this)


//mesmo utilizando bind pra tentar mudar a referencia do this dentro da arrow function
//o this não muda, ele continua referenciado o contexto em que a função foi escrita
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true - this nao varia mesmo com bind

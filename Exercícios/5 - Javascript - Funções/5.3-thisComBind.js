const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre programação funcional e OO


//bind(obj): passa um objeto para o this referenciar
//nao altera a função original
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa();



//Outro exemplo:
function Pessoa() {
    this.idade = 0

    /*
    this está referenciando o temporizador pois é quem está chamando
    this nao está referenciando o objeto
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)*/


    //COMO RESOLVER:
    /*
    amarrando o this do objeto à função
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
    */

    
    //armazenou o this que referencia o objeto à constante self
    //constante = self nao vai mudar nunca
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa()
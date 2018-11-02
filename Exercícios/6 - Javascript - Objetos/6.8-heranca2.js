//Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' } //avo tem como prototipo o Object.prototype
//__proto__: avo -> definindo o protótipo do objeto `pai` como o objeto `avo`
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)



//OUTRO EXEMPLO:
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        //super referencia o objeto pai
        //this referencia o objeto atual
        return `${this.modelo}: ${super.status()}`
    }
}

//Outro modo de estabelecer herança entre dois objetos
//Estabeler uma relação entre ferrari e carro, onde ferrari tem carro como seu protótipo
//Seria a mesma coisa que ferrari.__proto__ = carro

//Object.setPrototypeOf(obj, protoype)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//Quando um objeto é convertido para string, vai ser lido somente os atributos e métodos daquele objeto, ignorando o protótipo
//Porém, isso nao quer dizer que os atributos e métodos do protótipo não estejam disponiveis
console.log(ferrari, volvo)

volvo.acelerar(100)
console.log(volvo.status())
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Herança em classes no JS: usa o extends (classe ... extends pai)
//Por trás dos panos, a herança acontece do mesmo jeito via protótipo
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        //super() chama a função construtora da classe pai passando os atributos para ela
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)
const sequencia = {
    //usar _ antes da variavel: convenção que mostra que essa variável pretende ser acessada somente dentro do objeto
    //como é so uma convenção, ela poderá ser acessada fora, mas não é o ideal
    _valor: 1,
    get valor() {
        return this._valor++
    },
    //Javascript nao suporta sobrecarga!!!
    //A não ser usando as palavras get e set junto com uma função

    //get e set não sao palavras reservadas, elas fazem parte da sintaxe da função GETTER e SETTER
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

//acessando get e set
//quando chamamos o atributo pelo get e set sem atribuir valor, será chamado o get
//se atribuirmos valor, será usado get
console.log(sequencia.valor, sequencia.valor) //get
sequencia.valor = 1000 //set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)
//O node.js faz cache dos módulos - instancia unica
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
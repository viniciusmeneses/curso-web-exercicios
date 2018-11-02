Array.prototype.reduce2 = function(callback, inicial = this[0]) {
    for (let i = inicial === this[0] ? 1 : 0; i < this.length; i++) {
        inicial = callback(inicial, this[i], i, this)
    }
    return inicial
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma, 10))
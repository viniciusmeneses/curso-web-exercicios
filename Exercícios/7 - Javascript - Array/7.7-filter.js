//arr.filter(callback): filtra os elementos do array e retorna os elementos filtrados em um novo array
//o callback deve retornar true ou false
//se o retorno do callback for true, o elemento será adicionado no novo array

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//return implicito no arrow function de 1 linha
console.log(produtos.filter(produto => produto.preco >= 500 && produto.fragil))
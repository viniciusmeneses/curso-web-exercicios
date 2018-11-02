// let e const
{
    var a = 2
    let b = 3
    console.log(b) //escopo de bloco {}
}
console.log(a)


// template string - conta espaços, tabulação e quebra de linha
const produto = 'iPad'
console.log(`${produto} é caro!`)


// destructuring

//string também usa colchetes [ ]
const [l, e, ...tras] = "Vincius"
//O resto das letras serão atribuidas para variável `tras`
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome: n } = { nome: 'Nicole', idade: 18 }
console.log(n, i)
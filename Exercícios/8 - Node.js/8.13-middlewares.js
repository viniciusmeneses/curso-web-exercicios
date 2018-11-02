//Middleware pattern (chain of responsability)
//ctx: contexto - objeto que vai ser transmitido de um passo para o outro
//Quando não quisermos disparar o próximo passo, não chamamos e não passamos a função next

//O padrão middleware consiste em um conjunto de passos independentes que não conhecem o seu próximo passo
//No passo é passado uma função chamada next que irá chamar o próximo passo
//A função next, no entando, conhece a ordem dos passos do processo e irá chamar o próximo

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//Criando a função que vai iniciar a execução dos passos
//Passamos para ela o contexto e os passos que queremos na ordem por parâmetro
const exec = (ctx, ...middlewares) => {
    //Será criada uma nova função que recebe um índice
    //Ela verifica se foi passado algum passo e se o índice é menor que o tamanho do array (passos passados por parâmetro)

    //Se as duas condições forem true, executa a terceira:
    //executa o passo com base no índice, passado o contexto e uma nova função que dentro dela chama o execPasso 
    //novamente só que com o índice + 1 de forma recursiva
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
        /*
        if (middlewares && indice < middlewares.length) {
            middlewares[indice](ctx, () => execPasso(indice + 1))
        }
        */
    }
    //Executa o primeiro passo (indice 0) para dar inicio à execução dos demais na ordem
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
//exec(ctx, passo2, passo1, passo3) - trocando a ordem
console.log(ctx)
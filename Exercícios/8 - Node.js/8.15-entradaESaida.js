//Através do objeto process que é global
//Podemos obter a entrada do usuário pelo teclado, a saída e obter os parâmetros passados no comando de execução do módulo
//Quando um arquivo do node é executado, podemos obter as entradas e saídas

//Obtendo o valor da flag/parametros -a passado no comando: node 8.15-entradaESaida -a
//process.argv possui os parametros/flags passadas em formato de array
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

//se anonimo for true/foi passado
if (anonimo) {
    //process.stdout.write - mostra no console
    process.stdout.write('Fala Anônimo!\n')
    //termina o processo
    process.exit()
} else {
    process.stdout.write('Infome o seu nome:')
    //process.stdin.on('data', callback) - espera o input do usuário, quando ele der enter, executa a função de callback passando o que foi digitado
    process.stdin.on('data', data => {
        //retira o espaço do final da string digitada
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}

//stdout: standart output
//stdin: standart input
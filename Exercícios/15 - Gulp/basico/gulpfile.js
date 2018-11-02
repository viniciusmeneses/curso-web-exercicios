const gulp = require('gulp')

//a task default é a task padrão/porta de entrada de um arquivo gulp
//ela é a primeira a ser executada quando rodamos gulp

//primeiro parâmetro é o nome da task e o segundo é uma função de callback
//que será executada quando for chamada
gulp.task('default', () => {
    //chama outra task
    //vai executar as duas tasks passadas por parâmetros (precisam estar criadas)
    gulp.start('copiar', 'fim')
})


//2 parametro é um array com nomes de tasks que precisam ser executadas antes
//da task copiar ser executada

//no caso a task copiar será executada depois de antes1 e antes2 forem executadas
gulp.task('copiar', ['antes1', 'antes2'], () => {
    //define quais são os arquivos que serão trabalhados/usados na task
    //pode ser um nome do arquivo, um array de arquivos ou uma expressao (src/*.js)
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.src('pastaA/arquivo1.txt')
    // gulp.src('pastaA/*.txt') //seleciona todos os arquivos .txt dentro da pastaA
    // gulp.src('pastaA/**/*.txt') //selecione todos os arquivos .txt dentro da pastaA e de subpastas também

        // o método pipe() serve para encadearmos transformações/filtros nos arquivos selecionados
        // podemos passar os plugins a partir do pipe
        // .pipe(transformacao1())
        // .pipe(transformacao2())

        //depois de realizar as transformações, utilizamos gulp.dest(destino) para definir o destino dos arquivos transformados
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim1!!!')
})
gulp.task('fim2', () => {
    console.log('Fim2!!!')
})
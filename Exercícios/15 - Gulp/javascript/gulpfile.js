const gulp = require('gulp')
//concatena os arquivos em unico só
const concat = require('gulp-concat')
//Babel (https://babeljs.io/) converte o código JS com novos recursos em um código
//para ser suportado em até mesmo navegadores mais antigos (maior suporte)
//É usado no typescript(transforma typescript que não é entendido pelo browser em JS puro) e no react (JSX transformado em js puro)
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    //nem sempre é preciso retornar
    return gulp.src('src/**/*.js') //todo os arquivos js em src e dentro de subpastas

        .pipe(babel({
            //minificando pelo babel em ves do uglify:
            //minified: true,

            //retira os comentarios
            comments: false,

            //preset - determina quais plugins/versoes do ecma que serão utilizados
            //env - preset mais moderno que automaticamente identifica
            presets: ['env']
        }))

        //minifica o codigo - suporta apenas versões mais antigas do ECMA
        //caso o babel seja desativado/nao usado então dará erro no uglify
        //porque o babel nao converteu o codigo em uma versão mais antiga 
        .pipe(uglify())

        //adiciona um tipo de listener para verificar se quando ouver erro
        //executar a callback
        .on('error', function (err) {
            console.log(err)
        })

        //concatena os arquivos em um unico só passado por parametro
        .pipe(concat('codigo.min.js'))

        //joga os arquivos transformados/criados dentro de uma pasta build
        .pipe(gulp.dest('build'))
})
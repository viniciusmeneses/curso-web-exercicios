const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHTML'], () => {
    //Só precisa definir o arquivo index do sass e não todos
    //Porque no index já tem os imports dos outros
    gulp.src('src/sass/index.scss')
        //compila o sass e adiciona um listener de erro
        //quando der erro, mostra no console
        .pipe(sass().on('error', sass.logError))
        //minfica o css e os comentários também com a option
        //passada por parametro
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('copiarHTML', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})
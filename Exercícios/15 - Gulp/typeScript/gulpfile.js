const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
//plugin para compilar ts
const ts = require('gulp-typescript')
//Cria um novo projeto passando o arquivo de configuracoes do ts
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    //Não precisa passar o src porque no arquivo de config já está definido
    return tsProject.src()
        //compila o typescript
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build'))
})
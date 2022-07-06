const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    // ** is for subfolders
    return src('shinobi/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask(){
    watch(['shinobi/**/*.scss'], buildStyles)

}

exports.default = series(buildStyles, watchTask)
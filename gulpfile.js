const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss') /* Paso 1: Obtener el documento SCSS */
        .pipe(plumber()) /* Plumber para que no se detenga el código por si hay algún error*/
        .pipe(sass()) /* Paso 2: Compilar el archivo SASS en un CSS */
        .pipe(dest('build/css')); /* Paso 3: Guardar el nuevo documento CSS */

        done();
}

function compiladorCSS(done){
    watch('src/scss/**/*.scss', css); /* Esta función hace que se mantenga escuchando cambios y compilando automaticamente */
    done();
}

exports.css = css;
exports.compiladorCSS = compiladorCSS;
const { src, dest, watch } = require('gulp');
/* requerido para sass */
const dartSass = require('dart-sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);
const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const cssnano = require ('cssnano');
const sourcemaps = require ('gulp-sourcemaps');

/* requerido js */
const terser = require('gulp-terser-js');
const rename = require('rename');
const concat = require('gulp-concat');


const path = {
    css: './src/scss/**/*.scss',
    js: './src/js/**/*.js'
}

const pathReturn = {
    cssReady: './build/css',
    jsReady: './build/js'
}

function css() {
    return src(path.css)
    .pipe (sourcemaps.init('.'))
    .pipe (sass ())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(pathReturn.cssReady))
}


function js(){
    return src(path.js)
    .pipe(sourcemaps.init('.'))
    .pipe(concat ('bundle.js'))
    .pipe(terser())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(pathReturn.jsReady))
}


function watchArchivos(){
    watch( path.css, css)
    watch (path.js, js)
}

exports.default = watchArchivos;
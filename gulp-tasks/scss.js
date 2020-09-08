const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const { argv } = require('yargs');
const gulpIf = require('gulp-if');
const webpcss = require('gulp-webpcss');

sass.compiler = require('node-sass');

const scss = () => {
  return gulp
    .src('./src/scss/main.scss', { allowEmpty: true })
    .pipe(gulpIf(argv.dev, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(webpcss({ noWebpClass: '.no-webp' }))
    .pipe(gulpIf(argv.prod, cleanCSS({ level: 2 })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
};

module.exports = scss;

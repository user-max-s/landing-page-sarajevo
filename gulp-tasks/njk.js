const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const extReplace = require('gulp-ext-replace');

const njk = () => {
  return gulp
    .src('./src/templates/*.njk')
    .pipe(nunjucks.compile())
    .pipe(extReplace('.html'))
    .pipe(gulp.dest('./dist'));
};


module.exports = njk;

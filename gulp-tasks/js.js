const gulp = require('gulp');

const js = () => {
  return gulp
    .src('./src/js/main.js', { allowEmpty: true })
    .pipe(gulp.dest('./dist/js'));
};

module.exports = js;

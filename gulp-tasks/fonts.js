const gulp = require('gulp');

const fonts = () => {
  return gulp
    .src('./src/fonts/converted/*.{ttf,eot,woff2,woff,svg}', '*.ttf')
    .pipe(gulp.dest('./dist/fonts'));
};

module.exports = fonts;

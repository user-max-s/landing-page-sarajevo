const gulp = require('gulp');
const njk = require('./gulp-tasks/njk');
const clean = require('./gulp-tasks/clean');
const scss = require('./gulp-tasks/scss');
const fontsConversion = require('./gulp-tasks/fonts-conversion');
const fonts = require('./gulp-tasks/fonts');
const img = require('./gulp-tasks/img');
const svgSprite = require('./gulp-tasks/svg-sprite');
const serve = require('./gulp-tasks/serve');
const js = require('./gulp-tasks/js');

module.exports = {
  build: gulp.series(
    clean,
    gulp.series(svgSprite, gulp.parallel(njk, scss, fonts, img, js))
  ),
  'fonts-conversion': fontsConversion,
  default: gulp.series(
    clean,
    gulp.series(svgSprite, gulp.parallel(njk, scss, fonts, img, js)),
    serve
  ),
};

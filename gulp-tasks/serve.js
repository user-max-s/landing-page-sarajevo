const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const html = require('./html');
const njk = require('./njk');
const scss = require('./scss');
const js = require('./js');
const img = require('./img');
const fonts = require('./fonts');
const svgSprite = require('./svg-sprite');

const serve = () => {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    host: '192.168.0.105',
    port: '8000',
    cors: true,
  });

  const reload = (done) => {
    browserSync.reload();
    done();
  };

  // gulp.watch('./src/**/*.html', gulp.series(html, reload));
  gulp.watch('./src/**/*.njk', gulp.series(njk, reload));
  gulp.watch('./src/scss/**/*.scss', gulp.series(scss, reload));
  gulp.watch('./src/js/**/*.js', gulp.series(js, reload));
  gulp.watch(
    ['./src/img/**/*.{gif,png,jpg,svg}', '!./src/img/icons/**/*'],
    gulp.series(img, reload)
  );
  gulp.watch('./src/fonts/**/*.{ttf,woff,otf,svg}', gulp.series(fonts, reload));
  gulp.watch('./src/img/icons/**/*.svg', gulp.series(svgSprite, reload));
};

module.exports = serve;

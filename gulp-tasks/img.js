const gulp = require('gulp');
// const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const imgMinify = () => {
  return (
    gulp
      .src(['./src/img/**/*', '!./src/img/icons/**/*'], { nodir: true })
      // .pipe(newer('./dist/img'))
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img'))
  );
};

const toWebp = () => {
  return gulp
    .src('./src/img/**/*.{png,jpg}', { nodir: true })
    .pipe(webp({ quality: 50 }))
    .pipe(gulp.dest('./dist/img'));
};

module.exports = gulp.parallel(imgMinify, toWebp);

const gulp = require('gulp');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const gulpSvgSprite = require('gulp-svg-sprite');

const config = {
  shape: {
    dimension: {
      maxWidth: 100,
      maxHeight: 100,
    },
    dest: 'intermediate-svg',
  },
  mode: {
    symbol: {
      sprite: 'sprite.svg',
      dest: '',
      render: {
        scss: {
          dest: '_sprite-temp.scss',
          template: './sprite-template',
        },
      },
      example: true,
    },
  },
};

const svgSprite = () => {
  return gulp
    .src('./src/img/icons/**/*.svg')
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          // $('[fill^="#"]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(gulpSvgSprite(config))
    .pipe(gulp.dest('./dist/img/icons'));
};

const copySpriteSCSS = () => {
  return gulp
    .src('./dist/img/icons/_sprite-temp.scss', { allowEmpty: true })
    .pipe(gulp.dest('./src/scss/project'));
};

module.exports = gulp.series(svgSprite, copySpriteSCSS);

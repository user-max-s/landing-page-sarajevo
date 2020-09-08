const gulp = require('gulp');
const path = require('path');
const ttf2eot = require('gulp-ttf2eot');
const ttf2woff2 = require('gulp-ttf2woff2');
const ttf2woff = require('gulp-ttf2woff');
const ttf2svg = require('gulp-ttf-svg');

const source = './src/fonts/to-convert/';
const destination = './src/fonts/converted/';

const ttf = () => {
  return gulp.src(path.resolve(source, '*.ttf')).pipe(gulp.dest(destination));
};

const eot = () => {
  return gulp
    .src(path.resolve(source, '*.ttf'))
    .pipe(ttf2eot())
    .pipe(gulp.dest(destination));
};

const woff2 = () => {
  return gulp
    .src(path.resolve(source, '*.ttf'))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(destination));
};

const woff = () => {
  return gulp
    .src(path.resolve(source, '*.ttf'))
    .pipe(ttf2woff())
    .pipe(gulp.dest(destination));
};

const svg = () => {
  return gulp
    .src(path.resolve(source, '*.ttf'))
    .pipe(ttf2svg())
    .pipe(gulp.dest(destination));
};

const fontsConversion = gulp.parallel(ttf, eot, woff2, woff, svg);

module.exports = fontsConversion;

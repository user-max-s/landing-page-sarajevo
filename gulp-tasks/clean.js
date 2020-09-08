const del = require('del');
const gulp = require('gulp');

const clean = () => {
  return del('dist');
};

module.exports = clean;

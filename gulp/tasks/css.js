'use strict';

// CSS task

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

  return gulp.src(config.styles.src)
    .pipe(sass({
      sourceComments: global.isProd ? 'none' : 'map',
      sourceMap: 'sass',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }).on('error', handleErrors))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});









// gulp.task('css', function() {
//   return gulp.src('./src/sass/main.scss')
//     .pipe(plumber(
//     		{errorHandler: notify.onError('Error: <%= error.message %>')}
//     ))
//     .pipe(sass({ style: 'expanded', }))
//     .pipe(gulp.dest('./build/css/'))
//     .pipe(browsersync.reload({ stream:true }));
// });
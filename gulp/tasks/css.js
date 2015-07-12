'use strict';

// CSS task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var browsersync 	= require('browser-sync');
var sass        	= require('gulp-sass');
var plumber 			= require('gulp-plumber');
var notify 				= require('gulp-notify');

// Gulp css
gulp.task('css', function() {
  return gulp.src('./src/sass/main.scss')
    .pipe(plumber(
    		{errorHandler: notify.onError('Error: <%= error.message %>')}
    ))
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browsersync.stream());
});
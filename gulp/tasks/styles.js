'use strict';

// STYLES task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var browsersync 	= require('browser-sync');
var sass        	= require('gulp-sass');
var plumber 			= require('gulp-plumber');
var notify 				= require('gulp-notify');

// Gulp styles
gulp.task('styles', function() {
  return gulp.src( [config.styles.src] )
    .pipe(plumber(
    		{errorHandler: notify.onError('Error: <%= error.message %>')}
    ))
    .pipe(sass({outputStyle: config.styles.outputstyle}))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browsersync.stream());
});
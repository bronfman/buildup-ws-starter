'use strict';

// SERVE task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var browsersync 	= require('browser-sync');

// Static Server + watching scss/html files (localhost:3000)
gulp.task('serve', ['css'], function() {
    browsersync.init({
        server: "./build"
    });
    gulp.watch('./src/sass/**/*.scss', ['css']);
    gulp.watch('./src/views/**/*.html', ['movefiles']);
    gulp.watch('./build/**/*.html').on('change', browsersync.reload);
});
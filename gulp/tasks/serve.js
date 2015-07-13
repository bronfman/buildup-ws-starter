'use strict';

// SERVE task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var browsersync 	= require('browser-sync');

// Static Server + watching scss/html files (localhost:3000)
gulp.task('serve', ['styles'], function() {
    browsersync.init({
        server  : config.dist.root,
        port    : config.browserport,
        ui: 		{
 					 				port: config.uiport
								}
    });
    gulp.watch('./src/sass/**/*.scss', ['styles']);
    gulp.watch('./src/views/**/*.html', ['movefiles']);
    gulp.watch('./build/**/*.html').on('change', browsersync.reload);
});
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
    gulp.watch(config.watch.styles, ['styles']);
    gulp.watch(config.watch.html, ['movefiles']);
    gulp.watch('./' + config.dist.root + '/**/*.html').on('change', browsersync.reload);
});
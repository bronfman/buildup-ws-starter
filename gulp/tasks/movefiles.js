'use strict';

// MOVEFILES task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');


// Copy files from src to build
gulp.task('movefiles', function() {
		gulp.src(config.views.src)
		.pipe(gulp.dest(config.dist.root));
});
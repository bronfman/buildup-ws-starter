'use strict';

// MOVEFILES task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var rename 				= require('gulp-rename');


// Copy files from src to build
gulp.task('movefiles', function() {
		gulp.src('./src/views/**/*.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest(config.dist.root));
});
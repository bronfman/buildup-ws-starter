'use strict';

// MOVEIMAGES task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');


// Copy images from src to build
gulp.task('moveimages', function() {
		gulp.src('./src/img/*')
		.pipe(gulp.dest('./build/img'))
});
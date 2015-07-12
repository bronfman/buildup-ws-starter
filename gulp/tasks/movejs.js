'use strict';

// MOVEJS task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');


// Copy js from src to build
gulp.task('movejs', function() {
		gulp.src('./src/js/*')
		.pipe(gulp.dest('./build/js'))
});
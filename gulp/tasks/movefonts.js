'use strict';

// MOVEFONTS task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');


// Copy js from src to build
gulp.task('movefonts', function() {
		gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dest))
});
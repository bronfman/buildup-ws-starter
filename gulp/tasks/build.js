'use strict';

// BUILD task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var sequence 			= require('run-sequence');


// Build Task (run `gulp build`)
gulp.task('build', function (cb) {
  sequence('clean', 'movefiles', 'moveimages', 'movejs', 'movefonts', 'styles', cb);
});
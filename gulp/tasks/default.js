'use strict';

// DEFAULT task

// This task requires
var config       	= require('../config');
var gulp         	= require('gulp');
var sequence 			= require('run-sequence');


// Default Task (just run `gulp`)
gulp.task('default', function (cb) {
  sequence('clean', 'movefiles', 'moveimages', 'movejs', 'movefonts', 'serve', cb);
});
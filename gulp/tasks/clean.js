'use strict';

// CLEAN task

// This task requires
var config = require('../config');
var gulp   = require('gulp');
var del    = require('del');


// Remove the build folder
gulp.task('clean', function(cb) {
  	del([config.dist.root], cb);
});
var gulp        = require('gulp');
var browsersync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber 		= require('gulp-plumber');
var notify 			= require('gulp-notify');
var rename 			= require('gulp-rename');
var del 				= require('del');
var sequence 		= require('run-sequence');


// Clean
gulp.task('clean', function (cb) {
  del([
    './build'
  ], cb);
});

// CSS task
gulp.task('css', function() {
  return gulp.src('./src/sass/main.scss')
    .pipe(plumber(
    		{errorHandler: notify.onError('Error: <%= error.message %>')}
    ))
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browsersync.reload({ stream:true }));
});

// Copy files from src to build
gulp.task('movefiles', function() {
		gulp.src('./src/views/index.html')
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./build'));
});

// Copy images from src to build
gulp.task('moveimages', function() {
		gulp.src('./src/img/*')
		.pipe(gulp.dest('./build/img'))
});

// Copy js from src to build
gulp.task('movejs', function() {
		gulp.src('./src/js/*')
		.pipe(gulp.dest('./build/js'))
});

// Static Server + watching scss/html files (localhost:3000)
gulp.task('serve', ['css'], function() {
    browsersync.init({
        server: "./build"
    });
    gulp.watch('./src/sass/**/*.scss', ['css']);
    gulp.watch('./src/views/**/*.html', ['movefiles']);
    gulp.watch('./build/**/*.html').on('change', browsersync.reload);
});



// Default Task (just run `gulp`)
gulp.task('default', function (cb) {
  sequence('clean', 'movefiles', 'moveimages', 'movejs', 'serve', cb);
});

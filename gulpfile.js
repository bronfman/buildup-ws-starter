var gulp        = require('gulp');
var browsersync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber 		= require('gulp-plumber');
var notify 			= require('gulp-notify');
var rename 			= require('gulp-rename');
var del 				= require('del');
var sequence 		= require('gulp-sequence');

// Cleanup
gulp.task('clean', function() {
	del(['./build']);
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
// gulp.task('default', ['clean', 'movefiles', 'serve']);
gulp.task('default', sequence(['clean', 'movefiles'], ['serve']));









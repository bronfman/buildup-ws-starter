var gulp        = require('gulp');
var browsersync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber 		= require("gulp-plumber");
var notify 			= require("gulp-notify");


// CSS task
gulp.task('css', function() {
  return gulp.src('./sass/main.scss')
    .pipe(plumber(
    		{errorHandler: notify.onError('Error: <%= error.message %>')}
    ))
    .pipe(sass({ style: 'expanded', }))
    .pipe(gulp.dest('./css/'))
    .pipe(browsersync.reload({ stream:true }))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Static Server + watching scss/html files (localhost:3000)
gulp.task('serve', ['css'], function() {
    browsersync.init({
        server: "./"
    });
    gulp.watch("./sass/*.scss", ['css']);
    gulp.watch("*.html").on('change', browsersync.reload);
});

// Default Task (just run `gulp`)
gulp.task('default', ['serve']);
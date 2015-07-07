var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");


gulp.task('styles', function() {
    gulp.src('sass/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', ['styles'], function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
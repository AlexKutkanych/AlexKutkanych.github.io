var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
// var browserSync = require('browser-sync').create();


gulp.task('concat-css', function () {
  return gulp.src('css/dest/*.css')
    .pipe(concatCss("styles-main.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
  return gulp.src('css/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/dest'));
});


//Watch task
gulp.task('watch',function() {
    gulp.watch(['css/src/*.scss', 'css/dest/*.css', 'css/*.css'], ['concat-css', 'sass']);
});

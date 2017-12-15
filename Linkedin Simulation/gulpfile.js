var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    webserver = require('gulp-webserver');


gulp.task('concat-css', function () {
  return gulp.src('css/src/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
    return gulp.src('css/src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
  return gulp.src('./js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            port: 8000
        }));
});

gulp.task('watch', function() {
    gulp.watch('css/src/*.scss', ['sass']);
    gulp.watch('js/src/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch', 'webserver']);

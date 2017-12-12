var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function() {
    gulp.src('style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/'));
});

gulp.task('concat-css', function () {
  return gulp.src(['style/style.css','style/style1.css'])
    .pipe(concatCss("styles.main.css"))
    .pipe(gulp.dest('style'));
});

//Watch task
gulp.task('sass-w',function() {
    gulp.watch(['style/*.scss', 'style/*.css'], ['concat-css', 'sass']);
});

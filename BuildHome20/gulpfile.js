var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    spritesmith = require('gulp.spritesmith'),
    watch = require('gulp-watch'),
    webserver = require('gulp-webserver'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('concat-css', function () {
  return gulp.src('css/dist/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('sass', function () {
  return gulp.src('style/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});


gulp.task('sprite', function () {
    var spriteData = gulp.src('img/src/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('img/'));
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

gulp.task('svgstore', function () {
    return gulp
        .src('img/src/employee/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: false
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('img'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('css/bundle.css').pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    })).pipe(gulp.dest('css/'));
});


gulp.task('watch', function() {
    gulp.watch('style/src/*.scss', ['sass']);
    gulp.watch('img/src/*.png', ['sprite']);
});

gulp.task('default', ['sass', 'watch', 'webserver']);

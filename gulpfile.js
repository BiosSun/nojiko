var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var header = require('gulp-header');

var pkg = require('./package.json');

gulp.task('test', function() {
    gulp.src('./test/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./test'));
});

// watch
gulp.task('watch', function() {
});

gulp.task('default', ['test']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var header = require('gulp-header');

var pkg = require('./package.json');

var banner =
        '@charset "utf-8";\n' +
        '\n' +
        '/*!\n' +
        ' * <%= pkg.name %> - <%= pkg.version %>\n' +
        ' * normalize.css - 3.0.2\n' +
        ' * @license: <%= pkg.licenses[0].type %>  - <%= pkg.licenses[0].url %>\n' +
        ' * @url: <%= pkg.homepage %>\n' +
        ' */\n\n';

gulp.task('nojiko', function() {
    gulp.src([
        './sass/helpers/_nojiko-expand.scss',
        './sass/helpers/_nojiko-attach-inputs.scss',

        // 辅助函数，变量
        './sass/helpers/_text-inputs.scss',
        './sass/helpers/_button-inputs.scss',
        './sass/helpers/_font-family.scss',
        './sass/helpers/_is-default.scss',
        './sass/helpers/_is-merge.scss',
        './sass/helpers/_is-dark.scss',
        './sass/helpers/_is-light.scss',
        './sass/helpers/_map-set.scss',
        './sass/helpers/_map-extend.scss',
        './sass/helpers/_set-color-maps.scss',
        './sass/helpers/_set-alternative-color-maps.scss',
        './sass/helpers/_set-element-box-maps.scss',
        './sass/helpers/_get-element-box-height-by-name.scss',
        './sass/helpers/_computed-line-height.scss',

        // 混入类
        './sass/helpers/_size.scss',
        './sass/helpers/_float.scss',
        './sass/helpers/_opacity.scss',
        './sass/helpers/_position.scss',
        './sass/helpers/_padding.scss',
        './sass/helpers/_margin.scss',
        './sass/helpers/_clearfix.scss',
        './sass/helpers/_hide-text.scss',
        './sass/helpers/_inline-block.scss',
        './sass/helpers/_arrows-style.scss',
        './sass/helpers/_set-element-box.scss',
        './sass/helpers/_foreground-color.scss',
        './sass/helpers/_superfine-border.scss',
        './sass/helpers/_translucent-bgcolor.scss',
        './sass/helpers/_block-formatting-context.scss'
    ])
    .pipe(concat('_nojiko.scss'))
    .pipe(header(banner, {
        pkg: pkg
    }))
    .pipe(gulp.dest('./sass'));
});

gulp.task('test', ['nojiko'], function() {
    gulp.src('./test/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./test'));
});

// watch
gulp.task('watch', function() {
});

gulp.task('default', ['nojiko', 'test']);

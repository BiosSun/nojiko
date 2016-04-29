var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var header = require('gulp-header');

var pkg = require('./package.json');

gulp.task('test', function() {
    gulp.src('./test/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./test'));
});

gulp.task('docs', function() {
    var options = {
        dest: 'docs',
        verbose: true,
        package: 'package.json',
        theme: './node_modules/sassdoc-theme-winter/',
        groups: {
            'undefined': 'General',
            'add-ons': 'Add-ons',
            'helpers': 'Helpers',
            'list': 'List',
            'map': 'Map',
            'elements': 'Elements',
            'elements-extend': 'Elements Extend',
            'reset': 'Reset',
            'scaffolding': 'Scaffolding',
            'variables': 'Variables'
        },
        display: {
            access: ['public'],
            require: false,
            tagline: false,
            sort: {
                group: [
                    'undefined',
                    'helpers',
                    'add-ons',
                    'list',
                    'map',
                    'variables',
                    'reset',
                    'scaffolding',
                    'elements',
                    'elements-extend'
                ],
                type: [
                    'variable',
                    'function',
                    'mixin',
                    'placeholder'
                ]
            }
        },
        fragments: {
            document: __dirname + '/doc-fragments/document.md',
            group: {
                'variables': __dirname + '/doc-fragments/group-variables.md',
                'helpers': __dirname + '/doc-fragments/group-helpers.md',
                'add-ons': __dirname + '/doc-fragments/group-add-ons.md',
                'list': __dirname + '/doc-fragments/group-list.md',
                'map': __dirname + '/doc-fragments/group-map.md',
                'reset': __dirname + '/doc-fragments/group-reset.md',
                'scaffolding': __dirname + '/doc-fragments/group-scaffolding.md',
                'elements': __dirname + '/doc-fragments/group-elements.md',
                'elements-extend': __dirname + '/doc-fragments/group-elements-extend.md'
            }
        },
        basePath: 'http://biossun.org/nojiko',
        sourceLinkPrefix: 'sass/'
    };

    return gulp.src('./sass/**/*.scss')
        .pipe(sassdoc(options));
});

// watch
gulp.task('develop', ['docs', 'test'], function() {
    gulp.watch('./sass/**/*', ['docs', 'test']);
    gulp.watch('./doc-fragments/**/*', ['docs']);
});

gulp.task('default', ['docs', 'test']);

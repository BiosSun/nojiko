var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var mocha = require('gulp-mocha');

var pkg = require('./package.json');

var documentOptions = {
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
        'variables': 'Variables',
        'debug': 'Debug'
    },
    display: {
        access: ['public'],
        require: false,
        tagline: false,
        sort: {
            group: [
                'undefined',
                'variables',
                'helpers',
                'add-ons',
                'list',
                'map',
                'reset',
                'scaffolding',
                'elements',
                'elements-extend',
                'debug'
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
            'elements-extend': __dirname + '/doc-fragments/group-elements-extend.md',
            'debug': __dirname + '/doc-fragments/debug.md'
        }
    },
    basePath: 'http://biossun.org/nojiko',
    sourceLinkPrefix: 'sass/'
};

gulp.task('docs', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sassdoc(documentOptions));
});

gulp.task('test', function() {
    gulp.src('./test/test_sass.js', { read: false })
        .pipe( mocha() );
});

// watch
gulp.task('develop', ['docs', 'test'], function() {
    gulp.watch('./sass/**/*', ['test', 'docs']);
    gulp.watch('./test/**/*', ['test']);
    gulp.watch('./doc-fragments/**/*', ['docs']);
});

gulp.task('default', ['docs', 'test']);

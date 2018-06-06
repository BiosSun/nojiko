var gulp = require('gulp');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var mocha = require('gulp-mocha');
var _ = require('lodash');

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
        document: __dirname + '/README.md',
        group: {
            'variables': __dirname + '/docs-fragments/group-variables.md',
            'helpers': __dirname + '/docs-fragments/group-helpers.md',
            'add-ons': __dirname + '/docs-fragments/group-add-ons.md',
            'list': __dirname + '/docs-fragments/group-list.md',
            'map': __dirname + '/docs-fragments/group-map.md',
            'scaffolding': __dirname + '/docs-fragments/group-scaffolding.md',
            'elements': __dirname + '/docs-fragments/group-elements.md',
            'elements-extend': __dirname + '/docs-fragments/group-elements-extend.md',
            'debug': __dirname + '/docs-fragments/debug.md'
        }
    },
    basePath: 'http://biossun.org/nojiko',
    sourceLinkPrefix: 'sass/'
};

gulp.task('docs', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe( sassdoc(_.cloneDeep(documentOptions)) );
});

gulp.task('test.sass', function() {
    gulp.src('./test/sass/index.js', { read: false })
        .pipe( mocha() );
});

gulp.task('test.css', function() {
    gulp.src('./test/css/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            precision: 10
        }))
        .pipe(gulp.dest('./test/css'));
});

// watch
gulp.task('develop', ['docs', 'test.sass', 'test.css'], function() {
    gulp.watch('./sass/**/*', ['test.sass', 'test.css', 'docs']);
    gulp.watch('./test/**/*', ['test.sass', 'test.css']);
    gulp.watch('./docs-fragments/**/*', ['docs']);
    gulp.watch('./README.md', ['docs']);
});

gulp.task('default', ['docs', 'test.sass', 'test.css']);

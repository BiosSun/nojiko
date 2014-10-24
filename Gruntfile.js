'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('bootcamp');

    require('time-grunt')(grunt);

    var config = { };

    grunt.initConfig({

        config: config,

        sass: {
            test: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'test',
                    src: ['*.scss', '*.sass'],
                    dest: 'test',
                    ext: '.css'
                }]
            }
        },

        // Watch
        watch: {
            dist: {
                files: ['./**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
};

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: [
                'build/'
            ]
        },

        browserify: {
            dist: {
                files: {
                    'build/module.js':       [
                        'src/**/*.js'
                    ],
                    'build/module-tests.js': [
                        'test/**/*.js',
                        '!test/mocha.js'
                    ]
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        connect: {
            server: {
                options: {
                    port:           8000,
                    hostname:       '*',
                    keepalive:      true,
                    onCreateServer: function (server, connect, options) {
                        require("openurl").open("http://127.0.0.1:8000/test/")
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('test', [
        'clean', 'browserify', 'karma', 'clean'
    ]);
    grunt.registerTask('user-test', [
        'clean', 'browserify', 'connect'
    ]);
};
// karma.conf.js
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: 'build/**/*.js', included: true}
        ],

        exclude: [],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome', 'IE', 'Firefox'],

        captureTimeout: 60000,

        singleRun: true
    });
};
// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: ['jasmine', 'source-map-support'],
        plugins: [
            require('karma-source-map-support'),
            require('karma-webpack'),
            require('karma-coverage'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher')
        ],
        customLaunchers: {
            // chrome setup for travis CI using chromium
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        files: [
            'config/karma-entry.ts',
            'src/**/*.spec.ts',
            'src/app/**/!(app.component|app.module|environment)\.ts'
        ],
        preprocessors: {
            'config/karma-entry.ts': ['webpack'],
            'src/**/*.spec.ts': ['webpack'],
            'src/app/**/!(app.component|app.module|envionment)\.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type: 'html'},
                {type: 'text-summary'}
            ]
        }
    });
};

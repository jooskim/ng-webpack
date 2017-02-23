var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    config.set({
        basePath: '..',
        frameworks: ['jasmine', 'source-map-support'],
        plugins: [
            require('karma-source-map-support'),
            require('karma-webpack'),
            require('karma-coverage-istanbul-reporter'),
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
            'config/karma-entry.ts'
        ],
        preprocessors: {
            'config/karma-entry.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        reporters: ['progress', 'coverage-istanbul'],
        coverageIstanbulReporter: {
            reports: ['text-summary', 'html', 'json'],
            dir: './coverage',
            fixWebpackSourcePaths: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};

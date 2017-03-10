const path = require('path');
var SpecReporter = require('jasmine-spec-reporter');

require('ts-node').register({
    project: 'e2e'
});

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/**/*.e2e-spec.ts'
    ],
    exclude: [],
    multiCapabilities: [
        {
            browserName: 'firefox'
        }
        ,{
            browserName: 'chrome'
        }
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    maxSessions: 1,
    baseUrl: 'http://localhost:3001',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function() {
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}

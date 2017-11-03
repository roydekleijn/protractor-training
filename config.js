var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/test-report',
    filename: 'my-report.html',
    reportTitle: 'Demo Report'
});

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: './target/specs/**/*_spec.js',
    baseUrl: 'http://demo.seleniuminaction.com',
    getPageTimeout: 10000,
    allScriptsTimeout: 10000,

    capabilities: {
        'browserName': 'chrome',
    },
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
        jasmine.getEnv().addReporter(reporter);
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};

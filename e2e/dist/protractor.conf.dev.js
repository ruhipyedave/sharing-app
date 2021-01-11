"use strict";

// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var _require = require('jasmine-spec-reporter'),
    SpecReporter = _require.SpecReporter,
    StacktraceOption = _require.StacktraceOption;
/**
 * @type { import("protractor").Config }
 */


exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function print() {}
  },
  onPrepare: function onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.base.json')
    });

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};
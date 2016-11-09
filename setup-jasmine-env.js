/* globals jasmine */

var jasmineReporters = require('jasmine-reporters');
var junitReporter = new jasmineReporters.JUnitXmlReporter({
  savePath: 'output/',
  consolidateAll: false
});
jasmine.getEnv().addReporter(junitReporter);

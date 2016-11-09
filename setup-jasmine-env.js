/* globals jasmine */

var jasmineReporters = require('jasmine-reporters');
var junitReporter = new jasmineReporters.JUnitXmlReporter({
  savePath: 'output/'
});
jasmine.getEnv().addReporter(junitReporter);

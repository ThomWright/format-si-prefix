var chai = require('chai');
var chaiStats = require('chai-stats');
global.expect = chai.expect;

chai.config.includeStack = true;
chai.use(chaiStats);

require('babel/register')({
  optional: []
});

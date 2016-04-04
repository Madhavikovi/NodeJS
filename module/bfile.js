var foo = require('./afile.js');
foo.log();

var Arb = function() {};
Arb.prototype.log = function() {
	console.log("I am from Bfile");
};
module.exports = new Arb();
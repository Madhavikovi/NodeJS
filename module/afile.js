var Baz = function() {};

Baz.prototype.log = function() {
	console.log("I am from Afile");
};

module.exports = new Baz();
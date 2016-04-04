
module.exports.hello = function() {return "hello"}
module.exports.bye = function() {return "bye"}
module.exports.data = "Simple Text";
exports.point = "exports is an alias of module.exports."


// module.exports - anonymous function - In this case can't give exports as alias of module.exports
// module.exports.hello -  named function (hello is a method name) - can give exports as alias of module.exports
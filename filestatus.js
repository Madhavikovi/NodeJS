var fs = require('fs');
console.log("goinf to get file info!");

fs.stat('input.txt', function(err, status){
	if (err) return console.error(err);
	console.log(status);
	console.log("Got file info successfully!");

	console.log("isfile? " + status.isFile());
	console.log("isDirectory? " + status.isDirectory());
});
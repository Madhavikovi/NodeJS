var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to output.txt
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('chainOutput.txt.zip'));

console.log("File compressed"); 
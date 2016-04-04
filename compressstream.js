var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var rstream = fs.createReadStream('myfile.txt');
var wstream = fs.createWriteStream('myfile.txt.gz');

rstream //reads from myfile.txt
	.pipe(gzip) //compresses
	.pipe(wstream) //writes to myfile.txt.gz
	.on('finish', function() { //finished
		console.log('Done compressing');
	});
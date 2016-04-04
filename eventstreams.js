var fs = require('fs');
var data ="";

//create a readable stream
var rstream = fs.createReadStream('input.txt');

// set the encoding to be utf8
rstream.setEncoding('UTF8');

//handle stream events --> data, end and error
rstream.on('data', function(chuck){
	console.log("I am in data part");
	data += chuck;
});

rstream.on('end', function(){
	console.log("I am in end part");
	console.log(data);
});

rstream.on('error', function(err){
	console.log("I am in error part");
	console.log(err.stack);
});

console.log("program ended");
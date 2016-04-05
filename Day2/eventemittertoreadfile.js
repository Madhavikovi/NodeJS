var eventEmit = require('events');
var fs = require('fs');
var events = new eventEmit.EventEmitter();

events.on('read', readFileContent);
events.on('display', displayFileContent);
events.on('finished', finished);
events.emit('read', 'data.txt');

function readFileContent(fileName){
	console.log("reading " + fileName + ' file started.');
	fs.readFile(fileName, 'utf8', readFileData);
}

function displayFileContent(data){
	console.log("file Data : ");
	console.log(data);
	events.emit("finished");
}

function finished(){
	console.log("Reading and printing file content job is done successfullly.");
}

function readFileData(err, data, fileName){
	console.log("Reading " + fileName + " file done successfully.");
	events.emit('display', data);
}

//readFileData is a call back function...so no need to call param on calling that function(at 12th line).

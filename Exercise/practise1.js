var fs = require('fs');
var http = require('http');

//Asynchorous method;
var fdata;
fs.readFile('input.txt', function(err, data) {
	if (err) return console.error(err);
	fdata = data;
	// console.log(data.toString());
});

// The below line is synchronous method;
// var fdata = fs.readFileSync("input.txt");

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write(fdata);
	res.end();
}).listen(8080);
console.log("Started server............");
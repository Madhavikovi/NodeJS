console.log("hello world");
var temp1=10
var temp2=10
var res = temp1+temp2
console.log(res);

var http=require('http');
http.createServer( function (request, response){
	// Send the HTTP header
	// HTTP Sattus: 200 :OK
	// Content Type: text/plain
	response.writeHead(200, {'content-Type' : 'text/plain'});

	// Send the response body as "hello world"
	response.end("HELLO WORLD\n");
}).listen(8080);
console.log("SERVER Started with localhost:8080 port");


// BELOW is PRACTICE code with .listen(8000, '127.0.0.1');
 	//start of code
// var http=require('http')
// http.createServer(function (request, res){
// 	res.writeHead(200,{'content-type': 'text/plain'});
// 	res.end('practicing');
// }).listen(8000, '127.0.0.1');
// console.log('Started with 8000 port.open with http://127.0.0.1:8000');
	//end of code
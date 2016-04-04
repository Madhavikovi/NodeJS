var http=require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!DOCTYPE html>\n <html><head>' +
		'<title> WITH HTML </title> </head>' +
		'<body> HELLO WORLD! </body> </html>'
	);
	res.end();
}).listen(8080, '127.0.0.1');
console.log('SERVER at http://127.0.0.1:8080');
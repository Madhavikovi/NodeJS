var express = require('express');
var app= express();

app.get('/', function(req, res){
	res.send("Hello World");
});

app.get('/message', function(req, res){
	res.send("Hello world message for all.");
});

var server = app.listen(2000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("example app listening at http://%s:%s", host, port);
})

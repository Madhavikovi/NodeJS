var express = require('express');
var app= express();

app.get('/', function(req, res){
	res.send("Hello World");
});

app.get('/message', function(req, res){
	res.send("Hello world message for all.");
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000');
});

// After running this file at console ad node express.js
// go to browser and give localhost:3000 - Hello World  (as output)
// localhost:3000/message - Hello world message for all.

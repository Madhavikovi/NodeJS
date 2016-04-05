// An array of callback functions can handle a route.
var express = require('express');
var app = express();

var cb0 = function(req, res, next){
	console.log("It is cb0");
	next();
}

var cb1 = function(req, res, next){
	console.log("It is cb1");
	next();
}

var cb2 = function(req, res){
	res.send("Hello from C!");
}

app.get("/example/c", [cb1, cb0, cb2]); //Executes the variable functions called at array..it goes with order with mentioned at array.


var server = app.listen(4000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("listening at http://%s:%s", host, port)
})


//Related html file is form2.html
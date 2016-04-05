// An array of callback functions can handle a route.
var express = require('express');
var app = express();

var cb0 = function(req, res, next){
	console.log("It is home page");
}

var cb1 = function(req, res, next){
	console.log("It is about page");
	// res.redirect('/home');
}

// app.get('/home', function(req, res){
// 	// var tab = req.query.tab;
// 	res.redirect('/home');
// });

app.get("/home", cb0);
app.get("/about", cb1);

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("listening at http://%s:%s", host, port)
})

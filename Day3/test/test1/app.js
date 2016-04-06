var express = require('express');
var app = express();
var exports = module.exports = {};


app.get('/', function(req,res){
	res.send("hello world");
});

var server = app.listen(3000, function(){
	console.log("server at 3000");
});
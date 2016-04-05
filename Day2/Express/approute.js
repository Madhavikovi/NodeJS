var express=require('express');
var app=express();

app.route('/details')
	.get(function(req, res){
		res.send("get a random book");
	})
	.post(function(req, res){
		res.send("Add a book");
	})
	.put(function(req, res){
		res.send("Update a book");
	});

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("example app listening at htp://%s:%s", host, port)
});




//Related html file is form1.html
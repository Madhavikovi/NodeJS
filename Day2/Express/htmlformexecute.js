var express = require('express');
var app = express();

app.get('/process_get', function(req, res){
	response={
		first_name:req.query.fname,
		last_name:req.query.lname,
		qualification: req.query.qualification,
		org: req.query.org
	};
	console.log(req.connection.remoteAddress); //This is...to know who is accessing own system using ip address.
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(4000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("example app listening at htp://%s:%s", host, port)
});




//Related html file is form.html
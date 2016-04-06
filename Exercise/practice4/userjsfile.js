var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "test"
});

app.get('/create', function(req, res){
	response = {
		uname: req.query.uname, 
		lname: req.query.lname
	};
	console.log("response with user details: " + response);

	connection.connect(function(err){
		if(err) throw err
		console.log('connected');
		// connection.query('create table users(id int NOT NULL AUTO_INCREMENT primary key, uname varchar(255), lname varchar(255))', function(err, result){
		// 	if (err) throw err;
			connection.query('insert into users set ?', response, function(err, result){
				if (err) throw err;
				connection.query('select * from	users', function(err, results){
					if (err) throw err;
					console.log(results[0].uname)
					console.log(results[0].lname)
				});
			});
		// });
	});
	res.end(JSON.stringify(response));
}); 

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("listening at http:/%s:%s", host, port)
});

//NOTE:  IF TABLE DOES NOT EXIST, UNCOMMENT THE CODE RELATED TO creating table. (WHICH IS COMMENTED FOR NOW).
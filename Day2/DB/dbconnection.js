var mysql = require('mysql');
var connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password :'root',
	database :'test'
});

//connection testing
connection.connect(function(err){
	if(err){
		console.error('error connecting:' + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

//FETCH ROWS
connection.query('select * from employee', function(err, rows){
	if(err) throw err;
	console.log('Data received from Db: \n');
	console.log(rows);
});

//INSERT
var employee = {name : 'metrik5'};
connection.query("INSERT into employee SET ?", employee, function(err, result){
	if(err) throw err;
	console.log("Last inserted ID: ", result.insertId);
});

//UPDATE
connection.query('UPDATE employee SET name = ? where id = ?', ["india", 2], function(err, result){
	if(err) throw err;
	console.log("Changed " + result.changedRows + ' rows');
});

//DELETE
connection.query('DELETE from employee where id = ?', [6], function(err, result){
	if(err) throw err;
	console.log("Deleted " + result.affectedRows + ' rows');
});

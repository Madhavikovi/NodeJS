var express = require('express');
var app = express();
var instrumentation = require('instrumentation');
instrumentation(app);

app.use(function prkApp(req, res, next){
	setTimeout(function(){
		next();
	}, 250);
});

app.get('/apptest', function(req, res, next){
	res.send('apptest');
	next();
});

app.use(function prkApp2(req, res, next){
	console.log(req.timers);
});

app.listen(3000);
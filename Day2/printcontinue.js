var eventEmitter = require('events').EventEmitter;
var radium = new eventEmitter();

radium.on('radiation', function(hr, min, sec){
	console.log(hr + " : " + min + " : " + sec);
})

setInterval(function(){
	var date = new Date();
	radium.emit("radiation", date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);
const EveEmitter = require('events');

const myEmitter = new EveEmitter();

myEmitter.on('event1', function(){
	console.log("This is event1.");
});

myEmitter.emit('event1');

myEmitter.on('event2', function(){
	console.log('this is event2');
});

myEmitter.emit("event2");
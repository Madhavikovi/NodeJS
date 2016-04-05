const myEmitter = new (require('events').EventEmitter)();

var m=0;

myEmitter.once('event', () => {
	console.log(++m);
});

myEmitter.emit('event');
//print: 1

myEmitter.emit('event');
//Ignored





// OUTPUT
// C:\Users\training\Desktop\Node programming\Day2>node calleventonce.js
// 1
// C:\Users\training\Desktop\Node programming\Day2>
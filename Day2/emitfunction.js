var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('callme', function(){
	console.log("fasdfasdf");
})

eventEmitter.emit('callme');

function mobileOnHandler(data){
	console.log(data);
}
eventEmitter.emit("mobileon", mobileOnHandler("calling func from emit"));


// AT eventEmitter object usage....
// 1st param 'callme' is an eventname & second param would be eventhandler.
// on and emit are methods of eventEmitter object. 
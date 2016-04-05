function foo(){
	console.log("Foo after 3 seconds");
}

setTimeout(function(){
	foo();
}, 3000);
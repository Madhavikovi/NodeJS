var readline = require("readline");
var rl= readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('MyPrompt>'); //set our own prompt
rl.prompt(); //to open that seeted prompt


rl.on('line', function(line){
	switch(line.trim()) {
		case 'hello':
			console.log('world!');
			break;
		default:
			console.log('say what? I might have heard' + line.trim());
			break;
	}
	rl.prompt();
}).on('close', function(){
	console.log('Have a great day!');
	process.exit(0); //DOUBTTTTTTTT what is use of this
});


//what mean line.trim()

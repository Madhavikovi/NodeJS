var readline = require("readline");
var rl= readline.createInterface({
	input: process.stdin,
	output: process.stdout
});



rl.question('what do you think of node.JS', function(answer){
	console.log("Thank u for ur valuable feedback: ", answer);
	rl.close();
});


rl.setPrompt('NODEPrompt>'); //set our own prompt
rl.prompt(); //to open that seeted prompt



// We set our own prompt because in conlose, we see log line as "C:\Users\training\Desktop\Node programming>"..
// Instead of this big line, we can get out small starting prompt which we set 
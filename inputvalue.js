var readline = require("readline");
var rl= readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('what do you think of node.JS', function(answer){
	console.log("Thank u for ur valuable feedback: ", answer);
	rl.close();
});

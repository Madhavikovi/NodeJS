var colors = require("colors");
 
 var name="Madhavi";
 console.log(colors.green('Hello %s'), name);

 colors.setTheme({
 silly: 'rainbow',
 input: 'grey',
 verbose: 'cyan',
 prompt: 'grey',
 info: 'green',
 data: 'grey',
 help: 'cyan',
 warn: 'yellow',
 debug: 'blue',
 error: 'red'
 });

 console.log("this is an error".error);

 console.log("This is a warning".warn);
var chalk = require("colors");
 
console.log(chalk.blue("Hello World"));

console.log(chalk.blue("Hello") + "World" + chalk.red('!'));

console.log(chalk.blue.bgRed.bold("Hello world"));

console.log(chalk.blue("Hello", "world", "foo", "bar", "baz")); //because of , separation we get space btw those words on display time.

console.log(chalk.red('hello', chalk.underline.bgBlue('wold') + '!'));

console.log(chalk.green(
	'I am a green line' +
	chalk.blue.underline.bold('with a blue substring') +
	'that becomes green again!'
	));
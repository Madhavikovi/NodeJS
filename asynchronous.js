var fs= require('fs');

fs.readFile('input.txt', function(err, data){
	if (err) return console.error(err);
	console.log(data.toString());
});
console.log("Program ended");


// This is NON-blocking code which mean...
// it will allow other lines to execute as it will take time to read the file input.txt as it is in first line.
// This is of single threading with multiple process
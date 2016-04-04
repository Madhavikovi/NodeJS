var fs=require('fs');
console.log("Going to open a file");
fs.open("input.txt", 'r+', function(err, fdata){
	if (err) return console.eror(err);
	console.log("Opened successfully.");
	console.log(fdata.toString());
});
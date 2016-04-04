var fs= require('fs');
var buf = new Buffer(1024);
console.log("going to open an existing file");
fs.open("input.txt", 'r+', function(err, fd){
	if (err) return console.eror(err);
	console.log('file opened successfully!');
	console.log("'going to read a file");

	fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
		if (err){
			console.log(err);
		}
		//Print only read bytes to avoid junk.
		if(bytes>0){
			console.log(buf.slice(0, bytes).toString());
		}
		//close the opened file
		fs.close(fd, function(err){
			if (err){
				console.log(err);
			}
			console.log("File closed succesfully");
		});
	});
});
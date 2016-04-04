var fs= require('fs');

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program ended");


// This is blocking code which mean...
// it will not allow other lines to execute untill it reads the file input.txt as it is in first line
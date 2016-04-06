function printHello(){
	console.log("HELLO");
}

//To call above function after 2 seconds...
var t = setTimeout(printHello, 2000);

//Now clear the timer
clearTimeout(t);



// to get the data after sometime run this... setTimeout(printHello, 2000);
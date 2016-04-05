function delhi(){
	console.log("Reached Delhi");
}

setTimeout(function(){
	delhi();
}, 0);

function Pune(){
	console.log("Reached Pune");
}

setTimeout(function(){
	Pune();
}, 1200);

function mumbai(){
	console.log("Reached Mumbai");
}

setTimeout(function(){
	mumbai();
}, 2400);

function bangalore(){
	console.log("Reached Bangalore");
}

setTimeout(function(){
	bangalore();
}, 4000);

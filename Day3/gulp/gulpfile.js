var gulp = require('gulp');

gulp.task('default', function(){  // To excute this run....  'gulp' ...... (a simple gulp word as its default task). 
	console.log('hello default Gulp');
});

gulp.task("hello", function(){
	console.log("This is hello task"); //To execute this run ..... 'gulp hello' .....
});

gulp.task("copy", function(){ //To execute this run ..... 'gulp copy' .....
	gulp.src("index.js") //get source files with gulp.src
		.pipe(gulp.dest("public")) //output the file in the desination folder.
});


//NOTE : To run all task at once on running 'gulp'....
//change the default task as (add array of other tasks (as ['copy', 'hello']) in this default task as shown below)..

// gulp.task('default', ['copy', 'hello'], function(){  // To excute this run....  'gulp' ...... (a simple gulp word as its default task). 
// 	console.log('hello default Gulp');
// });
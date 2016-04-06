var request = require("request"),
	assert = require("assert"),
	base_url = "http://localhost:3000/";

describe("hello world server", function(){
	describe("GET /", function(){
		it("returns status code 200", function(done){
			request.get(base_url, function(error, response, body){
				assert.equal(200, response.statusCode);
				done();
			});
		});
		
		it("returns hello world", function(done){
			request.get(base_url, function(error, response, body){
				assert.equal('hello world', body);
				done();
			});
		});

		it("Basic testing", function(){
			assert.equal(-1, [1,2,3].indexOf(5)); //returns -1 when the value is not present/relevant in array.
			assert.equal("Abc", "Abcc"); // It fails
		});
	});
});



function add(){
	return Array.prototype.slice.call(arguments).reduce(function(prev, curr){
		return prev + curr;
	}, 0);
}

describe('add()', function(){
	var tests = [
		{args: [1,2], expected: 3},
		{args: [1,2,3], expected: 6},
		{args: [1,2,3,4,5], expected: 15},
		{args: [1,2,3,4,5,10], expected: 25}
	];
	tests.forEach(function(test){
		it("correctly adds " + test.args.length + " args", function(){
			var res = add.apply(null, test.args);
			assert.equal(res, test.expected);
		});
	});
});
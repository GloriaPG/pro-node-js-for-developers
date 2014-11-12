var async = require("async");

async.waterfaÂll([
	function(callback){
		callback(null,Math.random(), Math.ramdom());
	},
	function(a,b,callback){
		callback(null,a * a + b * b);
	},
	function(cc, callback){
		callback(null, Math.sqrt(cc));
	}
],function(error, c){
	console.log(c);
});

var async = require("async");

async.series([
	function(callback){
		setTimeout(function(){
			console.log("Task 1");
			callback(new Error("Problem in Task 1"),1);
		},200);
	},
	function(callback){
                setTimeout(function(){
                        console.log("Task 2");
                        callback(null,2);
                },100);
        }
],function(error,results){
	if(error){
		console.log(error.toString());
	}
	 else {
		console.log(results);
	}
});

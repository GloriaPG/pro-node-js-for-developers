var async = require("async");

async.parallelLimit({
	one: function(callback){
		setTimeout(function(){
			console.log("Task 1");
			callback(null,"Hi baby one");
		},100);
	},
	two: function(callback){
                setTimeout(function(){
                        console.log("Task 2");
                        callback(null,"Hi baby two");
                },200);
        },
	three: function(callback){
                setTimeout(function(){
                        console.log("Task 3");
                        callback(null,"Hi baby three");
                },300);
        }
},2, function(error,results){
	console.log(results);
});

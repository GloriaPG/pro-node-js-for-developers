var async = require("async");

async.parallel({
	one: function(callback){
		setTimeout(function(){
			console.log("Task 1");
			callback(null,1);
		},300);
	},
	two: function(callback){
		setTimeout(function(){
			console.log("Task 2");
			callback(null,2);
		},200);
	},
	three: function(callback){
		setTimeout(function(){
			console.log("Task 3");
			callback(null,"Hola soy la tarea tres ;)");
		},100);
	}
},function(error,results){
	console.log(results);
});
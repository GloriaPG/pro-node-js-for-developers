var async = require("async");
var queue = async.queue(function(task,callback){
	// process the task argument
	console.log(task);
	callback(null);
},4);

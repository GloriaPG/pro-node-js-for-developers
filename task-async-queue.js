var i = 0;

setInterval(function(){
	queue.push({
		id: i
	},function(error){
		console.log("Finished a task");
	});
	i++;
},200);


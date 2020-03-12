$("document").ready(function(){
	let i = 0;
	setInterval(function(){
		if(i == 0){
			document.getElementById("box1-1").style.display = "none";
			document.getElementById("box1-2").style.display = "block";
			i = 1;
		}
		else if(i == 1){
			document.getElementById("box1-1").style.display = "block";
			document.getElementById("box1-2").style.display = "none";
			i = 0;
		}
	},5000);
})
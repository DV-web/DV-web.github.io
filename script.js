$("document").ready(function(){
	$(".box6-simple-btn").click(function(){
		let x = this.id;
		if (x == "box6-simple-btn1") {
			document.getElementById("box6-simple-main1").style.display = "block";
			document.getElementById("box6-simple-main2").style.display = "none";
			document.getElementById("box6-simple-main3").style.display = "none";

			document.getElementById("box6-more1").style.display = "block";
			document.getElementById("box6-more2").style.display = "none";
			document.getElementById("box6-more3").style.display = "none";

			document.getElementById("box6-simple-btn1").style.background = "#ddd"; 
			document.getElementById("box6-simple-btn2").style.background = "#bbb"; 
			document.getElementById("box6-simple-btn3").style.background = "#bbb"; 

			document.getElementById("box6-simple-btn1").style.borderBottom ="none"; 
			document.getElementById("box6-simple-btn2").style.borderBottom = "solid #000 1px"; 
			document.getElementById("box6-simple-btn3").style.borderBottom = "solid #000 1px"; 
		}
		else if(x == "box6-simple-btn2"){
			document.getElementById("box6-simple-main1").style.display = "none";
			document.getElementById("box6-simple-main2").style.display = "block";
			document.getElementById("box6-simple-main3").style.display = "none";

			document.getElementById("box6-more1").style.display = "none";
			document.getElementById("box6-more2").style.display = "block";
			document.getElementById("box6-more3").style.display = "none";

			document.getElementById("box6-simple-btn1").style.background = "#bbb"; 
			document.getElementById("box6-simple-btn2").style.background = "#ddd"; 
			document.getElementById("box6-simple-btn3").style.background = "#bbb"; 

			document.getElementById("box6-simple-btn1").style.borderBottom = "#bbb"; 
			document.getElementById("box6-simple-btn2").style.borderBottom = "#ddd"; 
			document.getElementById("box6-simple-btn3").style.borderBottom = "#bbb"; 
		}
		else if(x == "box6-simple-btn3"){
			document.getElementById("box6-simple-main1").style.display = "none";
			document.getElementById("box6-simple-main2").style.display = "none";
			document.getElementById("box6-simple-main3").style.display = "block";

			document.getElementById("box6-more1").style.display = "none";
			document.getElementById("box6-more2").style.display = "none";
			document.getElementById("box6-more3").style.display = "block";

			document.getElementById("box6-simple-btn1").style.background = "#bbb"; 
			document.getElementById("box6-simple-btn2").style.background = "#bbb"; 
			document.getElementById("box6-simple-btn3").style.background = "#ddd"; 

			document.getElementById("box6-simple-btn1").style.borderBottom  = "#bbb"; 
			document.getElementById("box6-simple-btn2").style.borderBottom = "#bbb"; 
			document.getElementById("box6-simple-btn3").style.borderBottom = "#ddd"; 
		}
	})
})
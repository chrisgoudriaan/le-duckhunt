var duck = document.getElementById("duck");
var movement = ["up","down","left","right","NE","SE","SW","NW"];
var posLeft = 450;
var posTop = 250;
var hitcounter = 0
var misscounter = 0

function moveDuck(){
	var number = Math.floor(Math.random()*7);
	var move = movement[number];
	if(move == "up"){
		posTop = posTop - 50;
		duck.style.top = posTop + "px";
	}
	else if(move == "down"){
		posTop = posTop + 50;
		duck.style.top = posTop + "px";
	}
	else if(move == "left"){
		posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
	}
	else if(move == "NE"){
		posTop = posTop - 50;
		posLeft = posLeft + 50;
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
	}
	else if(move == "SE"){
		posLeft = posLeft + 50;
		duck.style.left = posLeft + "px";	
		posTop = posTop + 50;
		duck.style.top = posTop + "px";

	}
	else if(move == "SW"){
		posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
		posTop = posTop + 50;
		duck.style.top = posTop + "px";
	}
	else if(move == "NW"){
		posTop = posTop - 50;
		duck.style.top = posTop + "px";
		posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
	}
	else{
		posLeft = posLeft + 50;
		duck.style.left = posLeft + "px";
	}
	if(hitcounter + misscounter == 20){
		end()
	}
}
setInterval(function(){
  moveDuck()
}, 300); 


function reset(){
		console.dir(duck);
		posLeft = 450
		posTop = 250
		duck.style.top = 250 + "px"
		duck.style.left = 450 + "px"
		}

		duck.addEventListener("click", function(){
			reset()
			hitcounter++; 
			counterhit.innerHTML =+  hitcounter
			misscounter--;
		}
	)


		container.addEventListener("click", function(){
			misscounter++; 
			countermiss.innerHTML =+  misscounter
		}
	)
function end(){
	alert("je bent klaar. je score is " + hitcounter)
	hitcounter = 0
	misscounter = 0
}

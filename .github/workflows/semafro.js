let red = document.querySelector("div#vermelho");
let orange = document.querySelector("div#laranja");
let green = document.querySelector("div#verde");

function ligar(){
	red.classList.remove("off-red");
	red.classList.add("on-red");
	
	vermelho();
	
	console.log("Semáforo ligado!");
}

function vermelho(){

	let fora = setTimeout(function(){
		red.classList.remove("on-red");
		red.classList.add("off-red");
		
			console.log("A luz vermelha está ligada!");
		
	}, 5000);
	
	fora;
	
	
	laranja();
	
}

function laranja(){

	let dentro = setTimeout(function(){
		
		orange.classList.remove("off-orange");
		orange.classList.add("on-orange");
		
		console.log("A luz vermelha está desligada!");
		console.log("A luz laranja está ligada!");
	
	}, 6000);
	
	let fora = setTimeout(function(){
	
		orange.classList.remove("on-orange");
		orange.classList.add("off-orange");
		
	}, 12000);
	
	dentro;
	fora;
	
	verde();

}

function verde(){

	let dentro = setTimeout(function(){
		
		green.classList.remove("off-green");
		green.classList.add("on-green");
		
		console.log("A luz laranja está desligada!");
		console.log("A luz verde está ligada!");
	
	}, 14000);
	
	let fora = setTimeout(function(){
		green.classList.remove("on-green");
		green.classList.add("off-green");
		
			console.log("A luz verde está desligada!");
			console.log("Semáforo desligado!");
		
	}, 20000);
	
	dentro;
	fora;
	
}
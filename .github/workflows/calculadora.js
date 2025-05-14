//Variáveis
	var vizor = document.querySelector('textarea#vizor');
//Função
	function creatNumber(number) {
		vizor.innerHTML +=  number;
	}
	function clean(){
		vizor.innerHTML = "";
	}
	function backSpace(){
		var back = vizor.innerHTML;
		vizor.innerHTML = back.substring(0, back.length -1);
	}
	function equal() {
		if (vizor == "") {
			vizor.innerHTML = "";
		}else{
			vizor.innerHTML = eval(vizor.value);
		}
	}
let nome = window.prompt("Qual é o seu nome?");
let p = document.querySelector("p.ler");
let span = document.querySelectorAll('span');

let hora = new Date().getHours();
let minuto = new Date().getMinutes();

let diaSem = new Date().getDay();

let dia = new Date().getDate();

let meses = new Date().getMonth()+1;

let ano = new Date().getFullYear();

let semana = [
	"Domingo", 
	"Segunda-Feira",
	"Terça-Feira",
	"Quarta-Feira",
	"Quinta-Feira",
	"Sexta-Feira",
	"Sábado"
]

let mes = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
]

if(nome=="" || nome==undefined){
	p.textContent = "[ERRO] Infome um nome!";
	console.log("ERRO 01\nNão infomou um nome!");
}else{
	span[0].innerHTML = `Olá sr(a). ${nome}, seja bem-vindo.<br>`;
	console.log(`Feito com sucesso!`);
}if(hora<12){
	span[1].innerHTML = `Bom dia, são <b>${addZero(hora)}</b> : <b>${addZero(minuto)}</b>.<br>`;
	console.log("Bom Dia");
}if(hora<18){
	span[1].innerHTML = `Boa tarde, são <b>${addZero(hora)}</b> : <b>${addZero(minuto)}</b>.<br>`;
	console.log("Boa tarde");
}else{
	span[1].innerHTML = `Boa noite, são <b>${addZero(hora)}</b> : <b>${addZero(minuto)}</b>.<br>`;
	console.log("Boa noite");
}

span[2].innerHTML = `${semana[diaSem]}, ${addZero(dia)}/${addZero(meses)}/${ano}.<br>`;

function addZero(x){
	return x<10 ? "0"+x : ""+x;
}


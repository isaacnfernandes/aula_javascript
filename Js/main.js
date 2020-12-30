function clicou(){
	//alert("Obrigado por clicar");
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
	//console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
 	window.open("https://www.devmedia.com.br/trabalhando-com-eventos-em-javascript/28521");
 	window.location.href = "https://www.devmedia.com.br/trabalhando-com-eventos-em-javascript/28521";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	//alert("Você passou o mouse aqui.");
	elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}

function carregarPagina(){
	alert("Página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}

/*function soma(n1, n2){
	return n1 + n2;
}
alert(soma(5,10));


function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));


var validar = 0;

function validarIdade(idade){
	if (idade >= 18) {
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/

/*
var count = 0;
while (count < 5){
	console.log(count);
	count ++;
}

for (count = 0; count <= 5; count ++){
	console.log(count);
}
*/


/*
var idade = prompt("Qual a sua idade?");

if (idade >= 18) {
	alert("Maior de idade.");
}else{
	alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[0].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.nome);
*/

/*
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
lista.pop()
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista[1]);
*/

/*
var nome = "Isaac Fernandes";
alert("meu primeiro JS" + " " +nome);
var frase = "Japão é o melhor time do mundo";
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/
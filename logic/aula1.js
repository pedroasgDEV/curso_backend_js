//Calulca o IMC
const imc = (peso, altura) => peso / altura ** 2;

//Define resposta
function resp(imc){
	if(imc >= 40) return  "Obsidade grau 3";
	else if(imc >= 35) return "Obesidade grau 2";
	else if(imc >= 30) return "Obesidade grau 1";
	else if(imc >= 25) return "Sobrepeso";
	else if(imc >= 18.5) return "Peso normal";
	else return "Abaixo do peso";
}


function main(){
	//Entrada de dados
	const input = require("prompt-sync")({sigint: true});

	//O usuario dá entrada dos dados
	const peso = Number(input("Digite o seu peso em kg: "));
	const altura = Number(input("Digite sua altura em metros: "));

	//Saida no prompt
	console.log(`Seu nivel de gordura é "${resp(imc(peso, altura))}"`);
}

main();

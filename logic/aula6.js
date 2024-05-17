const paisagem = (altura, largura) => largura > altura;

function main(){
	const input = require("prompt-sync")({sigint: true});

	const altura = Number(input("Digite a altura da imagem: "));
	const largura = Number (input("Digite a largura da imagem: "));

	if(paisagem(altura, largura)) console.log("A imagem está no modo paisagem");
	else console.log("A imagem não está no modo paisagem");

}

main();

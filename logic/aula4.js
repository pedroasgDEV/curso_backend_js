function triangulo(tam){
	let triangulo = '\n';
	const meio = Math.floor(tam/2);
	let qnt;
	for (let i = 1; i <= tam; i += 2){
		qnt = Math.floor(i/2);
		for(let j = 0; j < tam; j++){
			if( j >= meio - qnt && j <= meio + qnt) triangulo += '*';
			else triangulo += ' ';
		}	
		triangulo += '\n';
	}
	
	return triangulo;
}

function main(){
	const input = require("prompt-sync")({sigint: true});
	
	let tam = Number(input("Digite a largura do triangulo: "));

	while(tam % 2 === 0){
		tam = Number(input("ERRO Precisa ser um numero impar, digite novamente: "));
	}

	console.log(triangulo(tam));

}

main();

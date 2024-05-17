const maior = (a, b) => (a >= b) ? a : b;

function main(){
	const input = require("prompt-sync")({sigint: true});

	const a = Number(input("Digite um numero: "));
	const b = Number(input("Digite outro numero: "));
	
	console.log(`O maior numero é "${maior(a, b)}"`);
}

main();

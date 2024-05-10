function main () {
	//Cria canal de entrada
	const input = require("prompt-sync")({sigint: true});
	const pessoas = [];
	
	while(true){
		const nome = input("Nome: ");
		const idade = input("Idade: ");
		const altura = input("Altura: ");
		const peso = input("Peso: ");

		pessoas.push({
			Nome:  nome,
			Idade:  idade,
			Altura:  altura,
			Peso:  peso
		});
		
		const op = input("Deseja continuar (S/N)? ");

		if(op == 'N') break;
	}

	console.log(`Voce descreveu ${pessoas.length}`);

	for(i of pessoas) console.log(i);
}

main();

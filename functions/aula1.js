function pessoa (nome, altura, idade, peso) {
	return {
		//atributes
		nome,
		altura,
		idade,
		peso,
		data: new Date(),
	
		//Getters
		get getNome () { return this.nome;  },
		get getAltura () { return this.altura;  },
		get getIdade () { return this.idade;  },
		get getPeso () { return this.peso;  },

		//Setters
		set setNome (nome) { this.nome = nome; },
		set setAltura (altura) { this.altura = altura; },
		set setIdade (idade) { this.idade = idade; },
		set setPeso (peso) { this.peso = peso; },

		//Metodos
		IMC () { return  (this.peso / this.altura ** 2).toFixed(2); },
		anoNascimento () {return this.data.getFullYear() - this.idade; },
		description () { return  `Ola, eu sou ${this.nome}, sou de ${this.anoNascimento()} e meu IMC é "${this.IMC()}"`}

	};
}

(function main () {
	const input = require("prompt-sync")({sigint: true});

	const nome = input("Digite seu nome: ");
	let altura, idade, peso;

	do altura = Number(input(`${nome.split(' ')[0]}, digite sua altura: `));  while (isNaN(altura));
	do idade = Number(input(`${nome.split(' ')[0]}, digite sua idade: `));  while (isNaN(idade));
	do peso = Number(input(`${nome.split(' ')[0]}, digite seu peso: `));  while (isNaN(peso));
	
	const eu = pessoa(nome, altura, idade, peso);
	console.log(eu.description());
})();


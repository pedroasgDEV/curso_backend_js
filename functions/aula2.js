function Pessoa(n, a, i, p) {

	//atributes
	let nome = n;
	let altura = a;
	let idade = i;
	let peso = p;
	const data = new Date();
	
	//Getters
	this.getNome = () => nome;
	this.getAltura = () =>  altura;
	this.getIdade = () => idade;
	this.getPeso = () => peso;

	//Setters
	this.setNome = (n) => nome = n;
	this.setAltura = (a) => altura = a;
	this.setIdade = (i) => idade = i;
	this.setPeso = (p) => peso = p;

	//Metodos
	this.IMC = () => (peso / altura ** 2).toFixed(2);
	this.anoNascimento = () => data.getFullYear() - idade;
	this.descricao = () =>  `Ola, eu sou ${nome}, sou de ${this.anoNascimento()} e meu IMC é "${this.IMC()}"`;
}

(function main () {
	const input = require("prompt-sync")({sigint: true});

	const nome = input("Digite seu nome: ");
	let altura, idade, peso;

	do altura = Number(input(`${nome.split(' ')[0]}, digite sua altura: `));  while (isNaN(altura));
	do idade = Number(input(`${nome.split(' ')[0]}, digite sua idade: `));  while (isNaN(idade));
	do peso = Number(input(`${nome.split(' ')[0]}, digite seu peso: `));  while (isNaN(peso));
	
	const eu = new Pessoa(nome, altura, idade, peso);
	eu.setNome("Augusto")
	console.log(eu.descricao());
})();


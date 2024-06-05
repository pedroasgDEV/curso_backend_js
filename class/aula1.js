class Cpf {
	//Atributo
	cpf;
	
	//Construtor
	constructor (cpf) {this.cpf = Array.from(cpf.replace(/\D+/g, ''));}
	
	//Retorna uma string formatada do cpf
	toString() {
		return `${this.cpf.slice(0, 3).join('')}.${this.cpf.slice(3, 6).join('')}.${this.cpf.slice(6, 9).join('')}-${this.cpf.slice(9, 11).join('')}`;
	}

	validaCpf() {
		// Cálculo para validar o primeiro dígito
    		let firstDigit = this.cpf.slice(0, -2).reduce((acum, val, id) => acum += Number(val) * (10 - id), 0);

    		// Valida o primeiro dígito
    		firstDigit = 11 - (firstDigit % 11);
    		if ((firstDigit > 9 ? 0 : firstDigit) !== Number(this.cpf[9]))
			return false;

    		// Cálculo para validar o segundo dígito
    		let secondDigit = this.cpf.slice(0, -1).reduce((acum, val, id) => acum += Number(val) * (11 - id), 0);

    		// Valida o segundo dígito
    		secondDigit = 11 - (secondDigit % 11);
    		if ((secondDigit > 9 ? 0 : secondDigit) !== Number(this.cpf[10])) 
			return false;

    		return true;

	}
	
}

class Pessoa extends Cpf {
	nome = "NO_NAME";
	idade = -1;

	constructor(nome = "NO_NAME", idade = -1, cpf){
		super(cpf);
		this.nome = nome;
		this.idade = idade;
	}

	anoNascimento() { return (new Date()).getFullYear() - this.idade; }

	toString() {
		return `${this.nome}, nascido em ${this.anoNascimento()} ${ (this.validaCpf()) ? "existe" : "não existe" }`;
	}


}

const x = new Pessoa("Pedro", 22, "127.211.966-18");
//console.log(x.toString());

exports.Cpf = Cpf;
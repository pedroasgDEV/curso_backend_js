function Cpf(cpf){
	
	//Modifica a entrada
	cpf = Array.from(cpf.replace(/\D+/g, ''));
	
	//Cria um atributo
	Object.defineProperty(this, "cpf", {
		enumerable: true,
		configurable: false,
		
		//retorna o array cpf
		get: () => cpf,
		
		//Tira os . - e transforma em array
		set: (value) => cpf =  Array.from(value.replace(/\D+/g, ''))
	});
	
	//Formata o cpf para string
	Cpf.prototype.toString = () => `${this.cpf.slice(0, 3).join('')}.${this.cpf.slice(3, 6).join('')}.${this.cpf.slice(6, 9).join('')}-${this.cpf.slice(9, 11).join('')}`;
	
	//Valida o CPF
	Cpf.prototype.validaCpf = () => {
		//Calculo para validar o primeiro digito
		let firstDigit = this.cpf.slice(0, 9).map( (val, id) => Number(val) * (10 - id) ).reduce( (acum, val) => acum += val  );
		
		//Valida o primeiro digito
		firstDigit = 11 - (firstDigit % 11);
		if((firstDigit > 9) ? 0 : firstDigit !== Number(this.cpf[9])) return false;

		//Calculo para validar o segundo digito
                let secondDigit = this.cpf.slice(0, 10).map( (val, id) => Number(val) * (11 - id) ).reduce( (acum, val) => acum += val  );
		
		//Valida o segundo  digito
                secondDigit = 11 - (secondDigit % 11);
                if((secondDigit > 9) ? 0 : secondDigit !== Number(this.cpf[10])) return false;


		return true;

	};
}

function Pessoa(nome, idade, cpf){
	//Herda o objeto cpf
        Cpf.call(this, cpf);
	Pessoa.prototype = {...Cpf.prototype};
        Pessoa.prototype.constructor = Pessoa

	//Atributos
	this.nome = nome;
	this.idade = idade;

        //Metodos
        //Retorna o ano de nascimento
        Pessoa.prototype.anoNascimento = () => (new Date()).getFullYear() - this.idade};
        //Retorn se a pessoa exite
        Pessoa.prototype.toString = () => `${this.nome}, nasciemdo em ${this.anoNascimento()} ${(this.validaCpf() ? 'existe' : 'não existe')}`;

}


const cpf = new Cpf("127.211.966-18");
const eu = new Pessoa("Pedro", 22, "127.211.966-18");
console.log(eu.anoNascimento());

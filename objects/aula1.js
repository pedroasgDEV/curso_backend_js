//Object.freeze(obj) trava as modificações do obj

function Pessoa1(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.setNome = (nome) => this.nome = nome;

	Object.freeze(this);
}

let eu = new Pessoa1("Pedro", 22);
eu.nome = "Augusto";
console.log(eu);
eu.setNome("Augusto");
console.log(eu)

//Object,defineProperty(obj, chave, {chavePropriedades})  cria uma chave do objeto e o configura
function Pessoa2(nome, idade) {
	Object.defineProperty(this, 'nome', {
		//Propriedades da chave
		enumerable: true, //Mostrar a chave no console.log
		value: nome, //atribuir valor a chave
		writable: false, //modificar valor da chave
		configurable: false //reconfigurar as propiredades da chave ou deleta-la
	});
	this.idade = idade;
	this.setNome = (nome) => this.nome = nome;

	Object.freeze(this);
}

eu = new Pessoa2("Pedro", 22);
eu.nome = "Augusto";
console.log(eu);
delete eu.nome
eu.setNome("Augusto");
console.log(eu)

//Object,defineProperties(obj, {chave1: {chave1Propriedades}, chave2: {chave2Propiedades}})  cria as chaves do objeto e as configura
function Pessoa3(nome, idade) {
	Object.defineProperties(this,{ 
		nome: { enumerable: true,
		value: nome,
		writable: false,
		configurable: false},
		
		idade: { enumerable: true,
		value: idade,
		writable: false,
		configurable: false}

	});
	this.setNome = (nome) => this.nome = nome;
	Object.freeze(this);
}

eu = new Pessoa3("Pedro", 22);
eu.nome = "Augusto";
console.log(eu);
delete eu.nome
eu.setNome("Augusto");
console.log(eu)

//Getter: retorna valor de uma chave, setter: atribui valor a uma chave cria uma chave do objeto e o configura
function Pessoa4(nome, idade) {

	let nomePrivado = nome;
	Object.defineProperty(this, 'nome', {
		//Propriedades da chave
		enumerable: true, //Mostrar a chave no console.log
		configurable: false, //reconfigurar as propiredades da chave ou deleta-la
		get: () => nomePrivado,
		set: (value) =>  nomePrivado = value
	});

	this.idade = idade;
	Object.freeze(this);
}

eu = new Pessoa4("Pedro", 22);
eu.nome = "Augusto";
console.log(eu);
console.log(eu.nome);
console.log(eu);


function Cpf(cpf) {
    // Modifica a entrada
    cpf = Array.from(cpf.replace(/\D+/g, ''));

    // Cria um atributo
    Object.defineProperty(this, "cpf", {
        enumerable: true,
        configurable: false,
        
        // Retorna o array cpf
        get: function() { return cpf; },
        
        // Tira os . - e transforma em array
        set: function(value) { cpf = Array.from(value.replace(/\D+/g, '')); }
    });
}

// Define os métodos no protótipo
Cpf.prototype.toString = function() {
    return `${this.cpf.slice(0, 3).join('')}.${this.cpf.slice(3, 6).join('')}.${this.cpf.slice(6, 9).join('')}-${this.cpf.slice(9, 11).join('')}`;
};

Cpf.prototype.validaCpf = function() {
    // Cálculo para validar o primeiro dígito
    let firstDigit = this.cpf.slice(0, -2).reduce((acum, val, id) => acum += Number(val) * (10 - id), 0);
    
    // Valida o primeiro dígito
    firstDigit = 11 - (firstDigit % 11);
    if ((firstDigit > 9 ? 0 : firstDigit) !== Number(this.cpf[9])) return false;

    // Cálculo para validar o segundo dígito
    let secondDigit = this.cpf.slice(0, -1).reduce((acum, val, id) => acum += Number(val) * (11 - id), 0);
    
    // Valida o segundo dígito
    secondDigit = 11 - (secondDigit % 11);
    if ((secondDigit > 9 ? 0 : secondDigit) !== Number(this.cpf[10])) return false;

    return true;
};

function Pessoa(nome, idade, cpf) {
    // Herda o objeto cpf
    Cpf.call(this, cpf);

    // Atributos
    this.nome = nome;
    this.idade = idade;
}

// Configura a herança corretamente
Pessoa.prototype = Object.create(Cpf.prototype);
Pessoa.prototype.constructor = Pessoa;

// Define os métodos no protótipo
Pessoa.prototype.anoNascimento = function() {
    return (new Date()).getFullYear() - this.idade;
};

Pessoa.prototype.toString = function() {
    return `${this.nome}, nascido em ${this.anoNascimento()} ${ (this.validaCpf()) ? "existe" : "não existe" }`;
};

// Teste
const cpf = new Cpf("127.211.966-18");
const eu = new Pessoa("Pedro", 22, "127.211.966-18");
console.log(eu.anoNascimento());
console.log(eu.toString());

//!!!!!!!!!!!!!!!!!!!!!!!! Deve sempre criar um metodo no prototype fora do bloco do obj !!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!! Arow function não permite usar this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!! Usa a porra do Object.create() para passar herança !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

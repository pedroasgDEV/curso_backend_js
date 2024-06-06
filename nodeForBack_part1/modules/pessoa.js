const Cpf = require("../../class/aula1").Cpf;

class Pessoa {

    constructor(nome = "NONAME", idade = -1, cpf = "NOCPF"){
        this.nome = nome;
        this.idade = idade;
        this.cpf = new Cpf(cpf);
        
        if(!this.cpf.validaCpf()) throw new Error("ERRO: CPF invalido"); 
    }

    get toString() {
        return `${this.nome}, nasceu em ${ (new Date()).getFullYear() - this.idade} e o seu cpf é ${this.cpf.toString()}`;
    }
}

exports.Pessoa = Pessoa;
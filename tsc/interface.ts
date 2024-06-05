interface Pessoa {
    getNome(): string;
    getIdade(): number; 
}

class Eu implements Pessoa {
    private nome = "Pedro";
    private idade = 22;

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }
}

class MostraEu extends Eu {
    public get mostraEu(): string {
        return `Meu nome é ${this.getNome()} e minha idade é ${this.getIdade()}`
    }
}

const eu = new MostraEu();
console.log(eu.mostraEu)
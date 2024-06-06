const Pessoa = require("../modules/pessoa").Pessoa;
const Pessoa = require("../modules/randPessoas");

let criaPessoa;

try {
    criaPessoa = new Pessoa("Pedro", 22, "12721196618");
}
catch (error) {
    console.error(error);
}

console.log(criaPessoa.toString)
const { Pessoa } = require("./Pessoa");

let criaPessoa;

try {
    criaPessoa = new Pessoa("Pedro", 22, "12721196618");
}
catch (error) {
    console.error(error);
}

console.log(criaPessoa.toString)
const nome = "Pedro Augusto";
const sobrenome = "Sousa Gonçalves";
const idade = 22;
const peso = 110;
const altura = 1.85;
let imc;
let anoNascimento;

imc = peso / altura ** 2;
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e tem o imc de: ${imc.toFixed(2)}`);

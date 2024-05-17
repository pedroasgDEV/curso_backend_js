const input = require("prompt-sync")({sigint:true});
const num = Number(input("Digite um número: "));

console.log(`Seu numero é ${num}`);
console.log(`Raiz quadrada: ${num ** 1/2}`);
console.log(`${num} é interio: ${Number.isInteger(num)}`);
console.log(`É NaN: ${Number.isNaN(num)}`);
console.log(`Arredondando para baixo: ${Math.floor(num)}`);
console.log(`Arredondando para cima: ${Math.ceil(num)}`);
console.log(`Com duas casas decimais: ${num.toFixed(2)}`);

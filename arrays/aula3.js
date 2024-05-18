const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];

//Reduce reduz o array em um unico valor
//array.reduz(function (acumulador, valor, indice, array), valorInicialAcumulador
//se não tiver valor inicial do acumulador, ele inicia com o 1° valor do array
//return retorna o valor para o acumulador

console.log(pessoas.reduce((acum, obj) => acum += obj.idade, 0));
console.log(pessoas.reduce((acum, obj) => acum += obj.nome + ' ', ''));
console.log(pessoas.reduce((acum, obj) => (acum.idade < obj.idade) ? obj : acum));

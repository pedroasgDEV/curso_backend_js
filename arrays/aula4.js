const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];

//forEach é um for em todo o array
// array.forEach(function(valor, indice, array))
pessoas.forEach((valor, indice, array) => console.log({id: indice + 1, ...valor}) );

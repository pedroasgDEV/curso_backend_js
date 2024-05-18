const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];

//Join ele junta elementos de um array em um string
console.log(pessoas.map(obj => obj.nome).join(" "));




const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];

//filter filtra informações de uma string, sem alterar valores
//array.filter(function (valor, indice, array) )
//o return é só true ou false, true se for add no novo array com o outro array filtrado, false se não for add
console.log(pessoas.filter(obj => obj.nome.length >= 6));
console.log(pessoas.filter(obj => obj.idade > 22));
console.log(pessoas.filter(obj => obj.nome.slice(-1) === 'a'));

const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];
//map modifica os valores do array
//array.map(function(valor, indice, array))
//o return é o nome valor daquela posição do array
console.log(pessoas.map(obj => obj.nome));
console.log(pessoas.map(obj => ({idade: obj.idade})));
console.log(pessoas.map((obj, id) => ({id: ++id, ...obj})));

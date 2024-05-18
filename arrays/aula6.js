const pessoas = [
	{nome: 'Naessa', idade: 24},
	{nome: 'Vitoria', idade: 21},
	{nome: 'Melissa', idade: 24},
	{nome: 'Clara', idade: 28},
	{nome: 'Melissa', idade: 27},
	{nome: 'Pedro', idade: 22}
];

//splice add e retira item em diferentes pontos do array
//splice(indiceInicial, qnts_retira_dps_do_indice, ...valoresQueSeraoAdd )

console.log(pessoas);

//push
pessoas.splice(pessoas.length, 0, {nome: "Julia", idade: 23},
				  {nome: "Catarina", idade: 24},
				  {nome: "Maria Carolina", idade: 23});
console.log(pessoas);

//unshift
pessoas.splice(0, 0, {nome: "Sol", idade: 24},
		     {nome: "Livia", idade: 21},
		     {nome: "Carol", idade: 22});
console.log(pessoas);

//pop
pessoas.splice(-3, 3);
console.log(pessoas);

//shift
pessoas.splice(0, 3);
console.log(pessoas);



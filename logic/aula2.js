function diaSemanaTxt(diaSemana){
	switch(diaSemana){
		case 0: return "Sabado";
		case 1: return "Segunda";
		case 2: return "Terça";
		case 3: return "Quarta";
		case 4: return "Quinta";
		case 5: return "Sexta";
		default: return "Sabado";
	}
}

const data = new Date();
const diaSemana = data.getDay();

console.log(`O dia de hoje é "${diaSemanaTxt(diaSemana)}"`);


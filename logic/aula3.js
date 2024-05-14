function diaSemanaTxt(diaSemana){
	switch(diaSemana){
		case 0: return "Sabado";
		case 1: return "Segunda-feira";
		case 2: return "Terça-feira";
		case 3: return "Quarta-feira";
		case 4: return "Quinta-feira";
		case 5: return "Sexta-feira";
		default: return "Sabado";
	}
}

function mesTxt(mes){
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio",
	"Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro",
	"Dezembro"];

	return meses[mes];
}

function main(){
	const time = new Date();

	const diaSemana = diaSemanaTxt(time.getDay());
	const diaMes = time.getDate();
	const mes = mesTxt(time.getMonth());
	const ano = time.getFullYear();
	const horas = time.getHours();
	const minutos = time.getMinutes();

	console.log(`${diaSemana}, ${diaMes} de ${mes} de ${ano} ${horas}:${minutos}`);
}

main();

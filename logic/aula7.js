function fizzBuzz(n){
	if(isNaN(n)) return n;
	else if(n % 3 === 0) return (n % 5 == 0) ? "FizzBuzz" : "Fizz";
	else if(n % 5 === 0) return "Buzz";
	else return n;
}

function main(){
	const input = require("prompt-sync")({sigint: true});

	const n = Number(input("Digite um numero: "));

	console.log(fizzBuzz(n))
}

main();

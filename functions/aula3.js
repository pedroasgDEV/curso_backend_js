//fib 2^N
function fib (n){
	if(n in [0, 1] ) return n;
	else return fib(n-1) + fib(n-2);
} 

//fib log N
function mult2x2 (A, B) {
	const x = A[0][0]*B[0][0] + A[0][1]*B[1][0];
	const y = A[0][0]*B[0][1] + A[0][1]*B[1][1];
	const z = A[1][0]*B[0][0] + A[1][1]*B[1][0];
	const w = A[1][0]*B[0][1] + A[1][1]*B[1][1];

	A[0][0] = x;
	A[0][1] = y;
	A[1][0] = z;
	A[1][1] = w;
}

function potencia(F, M, n){
	n = Math.floor(n);
	if(n in [0, 1]) return;

	potencia(F, M, n/2);

	mult2x2(F, F);

	if(n % 2 !== 0) mult2x2(F, M);
}

function speedFib (n){
	if(n == 0) return 0;
	
	let F = [[1, 1], [1, 0]];
	let M = [[1, 1], [1, 0]];

	potencia(F, M, n - 1);

	return F[0][0];
}

(function main () {
	const input = require("prompt-sync")({ sigint: true});

	const n = Number(input("Numero da sequencia de fibonaci: "));
	
	let start = Date.now();

	console.log(`Fib(${n}) = ${speedFib(n)}`);

	let duration = Date.now() - start;

	console.log(`A execução demorou "${duration} milisegundos"`);

	start = Date.now();

	console.log(`Fib(${n}) = ${fib(n)}`);

	duration  = Date.now() - start;
	
	console.log(`A execução demorou "${duration} milisegundos"`);
})();

function exec(str, temp) {
    return new Promise( (resolve, reject) => {
        if(typeof str !== "string") reject("TYPE_ERROR: " + str);
        setTimeout(() => resolve(str),  temp * 1000);
    });
}

const arrayPromise = [
    exec("1° execução 2 segundos", 2),
    exec("2° execução 3 segundo", 3),
    exec("3° execução 1 segundo", 1)
]

setTimeout(() => {
    console.log("\nPromise.all imprime todos os promisses do array em ordem")
    Promise.all(arrayPromise).then(rslv => console.log(rslv)).catch(rjct => console.log(rjct));
}, 4 * 1000);

console.log("Promise.race imprime o retorno mais rapido")
Promise.race(arrayPromise).then(rslv => console.log(rslv)).catch(rjct => console.log(rjct));

//Promise.resolve (retorna um promise automaticamente resolvido sem precisar entrar na funação do promise)
//Promise.reject (retorna um promise automaticamente rejeitado sem precisar entrar na funação do promise)
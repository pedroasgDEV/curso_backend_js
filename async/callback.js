//temp em segungos
function exec(str, temp, callback) {
    setTimeout( () => {
        console.log(str);
        if (callback) callback();
    } , temp * 1000);
}

setTimeout(() => {
    console.log("\nCom callback:");
    exec("1° execução 2 segundos", 2, () =>
        exec("2° execução 3 segundo", 3, () =>
            exec("3° execução 1 segundo", 1)
        )
    );
}, 6.5 * 1000);

console.log("Sem callback:");
exec("1° execução 2 segundos", 2);
exec("2° execução 3 segundo", 3);
exec("3° execução 1 segundo", 1);



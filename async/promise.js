//temp em segungos
function exec(str, temp) {
    return new Promise( (resolve, reject) => {
        if(typeof str !== "string") reject("TYPE_ERROR: " + str);
        setTimeout(() => resolve(str),  temp * 1000);
    });
}

setTimeout(() => {
    console.log("\nCom Promise sem reject:");
    exec("1° execução 2 segundos", 2)
        .then( rslv => {
            console.log(rslv);
            return exec("2° execução 3 segundos", 3);
        })
        .then( rslv => {
            console.log(rslv);
            return exec("3° execução 1 segundos", 1);
        })
        .then( rslv => {
            console.log(rslv);
        })
        .catch( rjct =>
            console.log(rjct)
        );
}, 4 * 1000);

console.log("\nCom Promise com reject:");
exec("1° execução 2 segundos", 2)
    .then( rslv => {
        console.log(rslv);
        return exec(123, 3);
    })
    .then( rslv => {
        console.log(rslv);
        return exec("2° execução 3 segundos", 3);
    })
    .then( rslv => {
        console.log(rslv);
    })
    .catch( rjct =>
        console.log(rjct)
    );

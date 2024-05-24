function exec(str, temp) {
    return new Promise( (resolve, reject) => {
        if(typeof str !== "string") reject("TYPE_ERROR: " + str);
        setTimeout(() => resolve(str),  temp * 1000);
    });
}

async function execute() {
    try{
        const rslv1 = await exec("1° execução 2 segundos", 2);
        console.log(rslv1);
    } catch (rjct){
        console.log(rjct);
    }

    try{
        const rslv1 = await exec("2° execução 3 segundos", 3);
        console.log(rslv1);
    } catch (rjct){
        console.log(rjct);
    }

    try{
        const rslv1 = await exec("3° execução 1 segundos", 1);
        console.log(rslv1);
    } catch (rjct){
        console.log(rjct);
    }
}

execute();
import fetch from 'node-fetch';

function carregaJson (href) {
    fetch(href) //Fetch retorna um Promise
        .then(rslv => rslv.json())
        .then(json => imprimeJson(json))
        .catch( (rjct) => console.log(rjct)) ;
}

function imprimeJson(json){ 
    console.log(`---------------------------------------------------`);
    json.results.forEach(element => {
        console.log(`Login: ${element.login.username}`);
        console.log(`Password: ${element.login.password}`);
        console.log(`---------------------------------------------------`);
    });
}

const qntPessoas = 5;
carregaJson("https://randomuser.me/api/?results=" + qntPessoas);
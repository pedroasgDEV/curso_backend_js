import axios from 'axios';

function carregaJson (href) {
    //Requisita somento o json
    axios(href) //Fetch retorna um Promise
        .then(json => imprimeJson(json.data))
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
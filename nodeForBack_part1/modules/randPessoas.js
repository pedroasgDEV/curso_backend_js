//Modulos
const fs = require("fs").promises;
const path = require("path");
const axios = require("axios");

//Caminhos
const file = path.resolve(__dirname, '..', '.jsons', 'randPessoas.json'); //Caminho do arquivo local
const href = "https://randomuser.me/api/?results="; //Link que gera pessoas e retorna um json

//Escreve no arquivo pessoas.json
async function writeFile ( qnt = 0 ) {
    let pessoas;

    return await getPessoas(qnt) //Requisita o json do site
            .then(json => pessoas = json) //Atribui o valor a variavel 
            .then(() => gravaArquivo(pessoas)); //Grava no arquivo a variavel

    //Faz a requisição no site
    async function getPessoas ( qnt ) {
        const json = await axios(href + qnt); //Faz a requisição de um json com dados de pessoas geradas aleatoriamente
        return json.data; //Retorna o que leu
    }

    //Grava os json no arquivo local
    async function gravaArquivo ( json ) {
        const format = JSON.stringify(json, '', 1); //Formata o json
        return await fs.writeFile(file, format, { flag : 'w'}); //Grava o json no arquivo
    }
}

//Lé arquivo
async function readFile () {
    const json = await fs.readFile(file, 'utf-8'); //Lé os arquvios
    return (json == '') ? json : JSON.parse(json); //Formata o que leu e retorna
}

//Limpa o arquivo
const clearFile = () => fs.writeFile(file, '', { flag : 'w'});

module.exports = {
    "write" :  writeFile,
    "read" : readFile,
    "clear" : clearFile,
}

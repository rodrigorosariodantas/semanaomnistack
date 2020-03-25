const knex = require('knex');
const configuration = require('../../knexfile'); //importar nossas configuracoes disponiveis no arquivo knex file

const connection = knex(configuration.development);//criar a conexao passando como parametro configurtion.deve...

module.exports = connection;//exportar a conexao para o bd
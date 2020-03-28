const knex = require('knex');
const configuration = require('../../knexfile'); //importar nossas configuracoes disponiveis no arquivo knex file

const config = process.env.NOD_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);//criar a conexao passando como parametro configurtion.deve...

module.exports = connection;//exportar a conexao para o bd
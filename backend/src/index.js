//aplicacao criada
const express = require('express');
const routers = require('./routers') // ./ para avisar que eh uma arquivo e nao um pacote como o express
const cors = require('cors');//modulo de seguranca
const app = express(); //criando a aplicacion

app.use(cors());
app.use(express.json());// avisando que usa o formato json
app.use(routers); //importante q esse código vá abajo de express.json
app.listen(3333); // mandar a aplicacao ouvir a porta 3333


/*
Metodos HTTP
GET: buscar uma informacao do backend
POST: criar uma informcao no backend
PUT: alterar uma informcao no backend
DELETE: deletar uma informcao no backend


Tpos de Parametros:'

Query: parametros nomeados enviados na rota apos ? (filtros, paginacao)
Route: árametros utilizados para identificar recursos
Request Body: corpo da requisicaoutilizados para criar ou alterar recursos



Bancos de dados

SQL: mySQL, SQLLite, PostgreSQL, Oracle, Microsoft SQLServer
NoSQL: MongoDB, CouchDB


DRIVER
driver; SELECT * FROM users

Query Builder: table('users').select('*').where('')
*/

// aplicacao criada
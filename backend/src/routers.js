const express = require('express');
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

//listagem de ongs 
routes.get('/ongs', OngController.index);
//listagem de ongs

//cadastro de ongs
routes.post('/ongs', OngController.create);
//cadastro de ongs

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
 


module.exports = routes; //exportar as rotas
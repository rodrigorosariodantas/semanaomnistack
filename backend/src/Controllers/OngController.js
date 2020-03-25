const crypto = require('crypto'); //eh um apcote do node para crear numeros aleatorios
const connection = require('../database/conection')//importando

module.exports = {

    async index (request, response) {//rota para lista todas as cngs do banco de dados

        const ongs = await connection('ongs').select('*');
        return response.json(ongs);//retornar um array
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX'); //numero aleatorio com 4 numeros transformado em string hexadecimal
    
        await connection('ongs').insert( { 
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({id});
    }
};
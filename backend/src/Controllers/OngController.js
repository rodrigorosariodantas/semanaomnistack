const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/conection')//importando

module.exports = {

    async index (request, response) {//rota para lista todas as cngs do banco de dados

        const ongs = await connection('ongs').select('*');
        return response.json(ongs);//retornar um array
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = generateUniqueId(); //numero aleatorio com 4 numeros transformado em string hexadecimal
    
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
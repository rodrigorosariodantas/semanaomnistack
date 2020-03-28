const connection = require('../database/conection')//importando conexao com o banco de dados


module.exports = {
    async create (request, response) {
        const { id } = request.body; //vbuscar ver se a ong exist

        const ong = await connection('ongs')//buscar a ong no banco de dados
            .where('id', id)
            .select('name')
            .first();
        if(!ong) {
            return response.status(400).json({error: 'No ong found with this id'});
        }
        return response.json(ong);
    }
}   
const connection = require('../database/conection')//importando conexao com o banco de dados


module.exports = {
    async index (request, response){
        const { page = 1 } = request.query;//paginacao.
        const [count] = await connection('incidents').count(); //cantidad de casos totales
        console.log(count);
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset(( page - 1 ) * 5)//pular 6 registro na primeira agina o no restante
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);//incidents eh o nome da tabela

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){    
        const { tittle, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            tittle,
            description,
            value,
            ong_id,
        });
        return response.json({id});
    },
    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;//buscar o id da ong, precisa verificar se o id q quer deletado vai ser da ong q criou
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({error: 'Operation not permited.'})

        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send(); 
    }
};

//instalar modulo de seguranca back end npm install cors
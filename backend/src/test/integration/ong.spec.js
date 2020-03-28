const request =  require('supertest');
const app = require('../../app')
const connection = require('../../database/conection')

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
      await connection.migrate.latest();
    });

    afterAll(async() => {
       await connection.destroy();
    });

    it('should create new ong', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "nome4",
            email: "email@email.com",
            whatsapp: "2343243324",
            city: "vdc",
            uf: "se"
        });
       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
    });
});
const app = require('../app')
const request = require('supertest')

describe("Todo Routes", () => {
    it ('should return all todos get /todo', (done) => {
        request(app)
        .get('/todo')
        .expect(200)
        .then(response => {
            const firstData = response.body[0]
            expect(firstData.title).toBe('belajar sequelize')
            done()
        })
        .catch(done)
    })
    it ('should one todo get /todo/id', (done) => {
        request(app)
        .get('/todo/1')
        .expect(201)
        .then(response => {
            const firstData = response.body
            expect(firstData.title).toBe('belajar sequelize')
            done()
        })
        .catch(done)
    })
    it ('should create todo post /todo', (done) => {
        request(app)
        .post('/todo')
        .send(
            {
                title: 'Ngaji bang',
                status: 'active'
            }
        )
        .expect(201)
        .then(response => {
            const data = response.body
            expect(data.title).toBe('Ngaji bang')
            expect(data.status).toBe('active')
            done()
        })
        .catch(done)
    })
    // it('should delete todo using DELETE /todo/id', (done) => {
    //     request(app)
    //         .update('/todo/2')
    //         .send(
    //             {
    //                 message: 'Todo deleted'
    //             }
    //         )
    //         .expect(200)  // Expect 200 OK
    //         .then(response => {
    //             expect(response.body.message).toBe('Todo deleted');  // Updated message
    //             done();
    //         })
    //         .catch(done);
    // });    
})
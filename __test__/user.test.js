import app from '../src/server.js'
import request from 'supertest'
let response = null
beforeEach(async () => {
    response = request(app)
})
describe('route /api/v1/user', () => {
    test('GET all users', async () => {
        response.get('/api/v1/user').expect(response.statusCode).toBe(200)
    })
})
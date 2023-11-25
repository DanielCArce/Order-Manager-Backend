import app from '../src/server.js'
import request from 'supertest'
let response = null
beforeEach(async ()=> response = await request(app))

describe('route /api/v1/clients', () => {
    test('GET ALL clients /', async () => {
        console.log(response.get('/api/v1/clients'))
    })
})
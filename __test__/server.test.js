import request from 'supertest'
import app from './../src/server'

describe('Check that server return info', function () {
    test('Testing jest', function () {
        expect(true).toBe(true)
    })
    test('Valid that endpoint return dev info', async function () {
        const response = await request(app).get('/')
        expect(response.status).toBe(200)
    })
    test('Endpoint return a json', async function () {
    const response = await request(app).get('/')
        expect(response.body).toEqual({ version: "1.0.0", "devs": ["danielcarce"] })
    })
})
describe('Orders Endpoint', function () {
    test('GET /', async function () {
        const response = await request(app).get('/api/v1/orders/')
        expect(response.status).toBe(401)
    })
})
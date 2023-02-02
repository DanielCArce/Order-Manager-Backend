import app from '../src/server.js'
import request from 'supertest'

describe('Route get index', () => {
    test('should check if the route api exist', async () => {
        const response = await request(app).get('/api/v1/')
        expect(response.statusCode).toBe(200)
    });
    test('should check if the route api send json', async () => {
        const response = await request(app).get('/api/v1/')
        expect(response.body).toEqual({
        version: '1.0.0',
        developers: [
            'DanielCArce'
        ]
    })
    })
});
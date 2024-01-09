import request from 'supertest'
import app from '../src/server.js'

describe('Testing all the api', function () {
    it('Main endpoint return a json body', async function () {
        const query = await (await request(app).get('/'))
        expect(query.body).toEqual({"version": "1.0.1",developer:["DanielCArce"]})
    })
})
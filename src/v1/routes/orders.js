import { Router } from 'express'

const routes = Router()

routes
    .get('/orders')
    .get('/:orderID')
    .post('/order')
    .put('/order')


export default routes
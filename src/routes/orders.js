import { getOrders, getOrderOrderID,updateOrderInfo, newOrder } from '../controllers/orders.js'
import { Router } from 'express'
import AuthMiddleware from '../middlewares/auth.js'
const router = Router()

router
    .use(AuthMiddleware)
    .get('/orders', getOrders)
    .get('/:status', getOrders)
    .get('/orders/:orderID', getOrderOrderID)
    .get('/orders/:orderID/:includeShippings', getOrderOrderID)
    .put('/:orderID',updateOrderInfo)
    .post('/new-order',newOrder)
    
export default router
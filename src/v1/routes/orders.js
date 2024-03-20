import { getOrders, getOrderOrderID,updateOrderInfo, newOrder } from '../controllers/orders.js'
import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
const router = Router()

router
    .use(AuthMiddleware)
    .get('/', getOrders)
    .get('/status/:status', getOrders)
    .get('/:orderID', getOrderOrderID)
    .get('/:orderID/:includeShippings', getOrderOrderID)
    .put('/:orderID',updateOrderInfo)
    .post('/new-order',newOrder)
    
export default router
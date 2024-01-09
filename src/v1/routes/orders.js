import { Router } from 'express'
import {deleteOrders, getAllOrders, getOrderByOrderID, postOrder, putOrder } from '../controllers/orders.js'
import AuthMiddleware from '../../middlewares/auth.js'
const router = Router()

router
    .use(AuthMiddleware)
    .get('/', getAllOrders)
    .get('/:orderID', getOrderByOrderID)
    .delete('/:orderID', deleteOrders)
    .post('/', postOrder)
    .put('/:orderID', putOrder)

export default router


import { Router } from 'express'
import { CreateOrderController, GetAllOrders, GetOrderByOrderID, UpdateOrderStatusController } from '../controllers/OrderController'


const router = Router()
router
    .get('/', GetAllOrders)
    .get('/:orderID',GetOrderByOrderID)
    .put('/:orderID', UpdateOrderStatusController)
    .post('/create-order', CreateOrderController)
export default router;
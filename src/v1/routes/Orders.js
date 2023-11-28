import {Router} from 'express'
import { deleteOrderByOrder, getAllOrders, getOrderByCliendID, getOrderByID, postNewOrder, putOrderStatus } from '../controllers/Orders.js'
import AuthMidleware from '../../middleware/AuthMidleware.js'


const orderRouter = Router()
orderRouter
    .use(AuthMidleware)
    .get('/', getAllOrders)
    .get('/:cliendID', getOrderByCliendID)
    .get('/:orderID', getOrderByID)
    .put('/', putOrderStatus)
    .post('/', postNewOrder)
    .delete('/', deleteOrderByOrder)

export default orderRouter
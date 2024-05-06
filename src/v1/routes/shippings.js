import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
import {newShipping,shippingByID,getShippings, getShippingsByOrderID} from '../controllers/shippings.js'
const router = Router()
router
    .use(AuthMiddleware)
    .get('/',getShippings)
    .post('/new-shipping', newShipping)
    .get('/:shippingID', shippingByID)
    .get(':/orderID',getShippingsByOrderID)
export default router
import { Router } from 'express'
import AuthMiddleware from '../middlewares/auth.js'
import {newShipping,shippingByID} from '../controllers/shippings.js'
const router = Router()
router
    .use(AuthMiddleware)
    .post('/new-shipping', newShipping)
    .get('/:shippingID', shippingByID)
export default router
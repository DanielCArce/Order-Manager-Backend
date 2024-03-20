import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
import { authorizationCtrl } from '../controllers/auth.js'

const router = Router()

router.post('/authorization',authorizationCtrl)

export default router
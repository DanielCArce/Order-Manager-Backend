import { Router } from 'express'
import AuthMiddleware from '../middlewares/auth.js'
import { authorizationCtrl } from '../controllers/auth.js'

const router = Router()

router.post('/authorization',authorizationCtrl)

export default router
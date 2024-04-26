import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
import { authorizationCtrl, recoveryPassord } from '../controllers/auth.js'

const router = Router()

router.post('/authorization', authorizationCtrl)
    .post('/recovery-password', recoveryPassord)

export default router
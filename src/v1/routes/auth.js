import { Router } from 'express'
import { authorizationCtrl, recoveryPassord } from '../controllers/auth.js'

const router = Router()

router.post('/authorization', authorizationCtrl)
    .post('/recovery-password', recoveryPassord)

export default router
import AuthMiddleware from '../../middlewares/auth.js'
import { getSignOut, postSignIn } from '../controllers/auth.js'
import { Router } from 'express'

const router = Router()
router
    .post('/token', postSignIn)
    .use(AuthMiddleware)
    .get('/', getSignOut)


export default router
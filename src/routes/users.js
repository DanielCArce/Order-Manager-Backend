import { Router } from 'express'
import {createUser} from '../controllers/users.js'
import AuthMiddleware from '../middlewares/auth.js'
const router = Router()

router
    .use(AuthMiddleware)
    .post('/new-user', createUser)

export default router
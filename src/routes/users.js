import { Router } from 'express'
import {createUser,updatePassword} from '../controllers/users.js'
import AuthMiddleware from '../middlewares/auth.js'
const router = Router()

router
    .use(AuthMiddleware)
    .post('/new-user', createUser)
    .put('/update-password',updatePassword)

export default router
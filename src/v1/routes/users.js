import { Router } from 'express'
import AuthMiddleware from '../../middlewares/auth.js'
import {deleteUsers, getUserByUserEmail, putUser, postUser, getAllUsers} from '../controllers/users.js'
const router = Router()

router
    .post('/', postUser)
    .use(AuthMiddleware)
    .get('/:userEmail', getUserByUserEmail)
    .get('/',getAllUsers)
    .put('/:userEmail', putUser)
    .delete('/:userEmail',deleteUsers)


export default router
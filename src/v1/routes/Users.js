import {Router} from 'express'
import { deleteUserByEmail, getAllUsers, getUserByEmail, postNewUser, putUserByEmail } from '../controllers/Users.js'
import AuthMidleware from './../../middleware/AuthMidleware.js';

const userRouter = Router()

userRouter
    .get('/', getAllUsers)
    .get('/:userEmail', getUserByEmail)
    .delete('/', deleteUserByEmail)
    .post('/', postNewUser)
    .use(AuthMidleware)
    .put('/', putUserByEmail)


export default userRouter

import { Router} from 'express'
import { CreateUserController, DeleteUserController, UpdateUserInfoController } from '@controllers/UserController';


const router = Router()
router
    .post('/create-user', CreateUserController)
    .put('/:userID', UpdateUserInfoController)
    .delete('/:userID',DeleteUserController)


export default router;
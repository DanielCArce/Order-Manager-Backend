import { deleteClientProvider, putClient, postClient } from '../controllers/clientsproviders.js'
import {Router} from 'express'
import AuthMiddleware from '../../middlewares/auth.js'
const router = Router()

router
    .use(AuthMiddleware)
    .post('/',postClient)
    .delete('/:clientID', deleteClientProvider)
    .put('/:clientProviderID', putClient)


export default router
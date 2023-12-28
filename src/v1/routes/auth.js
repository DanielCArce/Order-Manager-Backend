import { Router } from 'express'
import { signIn, signOut } from '../controllers/auth.js'

const routes = Router()


routes
    .post('/', signIn)
    .get('/',signOut)

export default routes
import { Router } from 'express'
import {handleAllClients, handleClientById, handleNewClient, handleUpdateClient} from '../controllers/clients.js'
const router = Router();

router.put('/:id', handleUpdateClient)
router.get('/:id', handleClientById)
router.get('/', handleAllClients),
router.post('/',handleNewClient)

export default router
import { Router } from 'express'
import {handleIndexController, handleIVersionController} from '../controllers/index.js'
const router = Router();

router.get('/', handleIndexController)
router.get('/version',handleIVersionController)
export default router
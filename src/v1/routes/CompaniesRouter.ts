import { Router } from 'express'
import {CreateOrderController } from '@controllers/CompaniesController'
const router = Router()
router.post('/', CreateOrderController)
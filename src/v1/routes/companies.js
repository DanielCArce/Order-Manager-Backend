import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
import { createNewCompany, findCompanyByID, obtainAllCompanies } from '../controllers/companies.js'

const router = Router()
router
    .use(AuthMiddleware)
    .post('/new-company', createNewCompany)
    .get('/', obtainAllCompanies)
    .get('/:companyID', findCompanyByID)
export default router
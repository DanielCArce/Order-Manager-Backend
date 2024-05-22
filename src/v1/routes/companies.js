import { Router } from 'express'
import AuthMiddleware from '../../middlewares/AuthMiddleware.js'
import { createNewCompany, findCompanyByID, obtainAllCompanies, updateInfoToCompany, deleteCompany } from '../controllers/companies.js'

const router = Router()
router
    .use(AuthMiddleware)
    .post('/new-company', createNewCompany)
    .get('/', obtainAllCompanies)
    .get('/:companyID', findCompanyByID)
    .put('/:companyID', updateInfoToCompany)
    .delete('/:companyID', deleteCompany)
export default router
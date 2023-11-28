import {Router} from 'express'
import { getAllCompanies, getCompanyByCompanyID, getCompanyByCompanyType, postNewCompany, deleteCompayByCompanyID } from '../controllers/Company.js'
import AuthMidleware from './../../middleware/AuthMidleware.js';

const companyRouter = Router()

companyRouter
    .use(AuthMidleware)
    .get('/', getAllCompanies)
    .get('/:companyID', getCompanyByCompanyID)
    .get('/:companyType', getCompanyByCompanyType)
    .post('/', postNewCompany)
    .delete('/',deleteCompayByCompanyID)
export default companyRouter
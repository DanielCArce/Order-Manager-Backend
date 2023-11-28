import {deleteCompanyByCompanyID, findAllCompanies,  findCompanyByCompanyID, findCompanyByCompanyType, newCompany} from '../db/Companies.js'


export async function postNewCompany(req, res) {
    let { company } = req.body
    let tempCompany = await newCompany(company)
    res.status(201).json(tempCompany)
}
export async function getAllCompanies(req, res) {
    let tempCompany = await findAllCompanies()
    res.status(201).json(tempCompany)
}
export async function getCompanyByCompanyID(req, res) {
    let {companyID} = req.params
    let tempCompany = await findCompanyByCompanyID(companyID)
    res.status(201).json(tempCompany)
}

export async function getCompanyByCompanyType(req, res) {
    let { companyType } = req.params
    let tempCompany = await findCompanyByCompanyType(companyType)
    res.status(201).json(tempCompany)
}
export async function deleteCompayByCompanyID(req, res){
    let {companyID} = req.body
    let deletedCompany = await deleteCompanyByCompanyID()
}
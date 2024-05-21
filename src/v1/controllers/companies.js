import {createCompany, findCompany, getAllCompanies, updateInfo} from '../db/Clients.js'

export async function createNewCompany(request, response, next) {
    try {
        const companyInfo = request.body
        const newCompany = await createCompany(companyInfo)
        return response.status(200).json({newCompany})
    } catch (error) {
        return next(error)
    }
}
export async function findCompanyByID(request, response, next) {
    try {
        const companyID = request.params.companyID
        const companyFinded = await findCompany(companyID)
        return response.status(200).json({companyFinded})
    } catch (error) {
        return next(error)
    }
}
export async function obtainAllCompanies(request, response, next) {
    try {
        const allCompanies = await getAllCompanies()
        return response.status(200).json({allCompanies})
    } catch (error) {
        next(error)
    }
}
export async function updateInfoToCompany(request, response, next){
    try {
        const companyID = Number(request.params.companyID)
        const companyUpdated = await updateInfo(companyID, request.body)
        return response.status(200).json({companyUpdated})
    } catch (error) {
        next(error)
    }
}
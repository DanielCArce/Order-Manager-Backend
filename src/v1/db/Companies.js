import db from './index.js'
import ApiError from './../../utils/Error.js';

export async function newCompany(companyData) {
    try {
        return db.company.create({
            data:companyData
        })
    } catch (error) {
        throw new ApiError(501,'Database',error.message)        
    }
}
export async function findCompanyByCompanyID(companyID) {
    try {
        return db.company.findUnique({
            where: {
             legal_id: companyID
         }
     })   
    }catch (error) {
        throw new ApiError(501,'Database',error.message)        
    }
}
export async function findCompanyByCompanyType(companyType) {
    try {
        return db.company.findUnique({
            where: {
                kind_company: companyType
            }
        })
    } catch (error) {
        throw new ApiError(501,'Database',error.message)               
    }
}
export async function findAllCompanies() {
    try {
        return db.company.findMany()
    } catch (error) {
        throw new ApiError(501,'Database',error.message)        
    }
}
export async function deleteCompanyByCompanyID(companyID) {
    try {
        return db.company.delete({
            where: {
                legal_id: companyID
            }
        })
    } catch (error) {
        throw new ApiError(501,'Database',error.message)                
    }
}

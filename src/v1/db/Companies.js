import db from './index.js'

export async function newCompany(companyData) {
    try {
        db.company.create({
            data:companyData
        })
    } catch (error) {
        
    }
}
export async function findCompanyByCompanyType(companyType) {
    try {
        db.company.findUnique({
            where: {
                kind_company: companyType
            }
        })
    } catch (error) {
        
    }
}
export async function findAllCompanies() {
    
}
export async function deleteCompanyByCompanyID(companyID){}

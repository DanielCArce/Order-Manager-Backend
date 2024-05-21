import db from '../../db/index.js'
export async function createCompany(companyInfo) {
    try {
        return db.companies.create({
            data: companyInfo
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function findCompany(companyID) {
    try {
        return db.companies.findFirst({
            where: {
                id:companyID
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getAllCompanies() {
    try {
        return db.companies.findMany({})
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateInfo(companyID, info) {
    try {
        return db.companies.update({
            where: {
                id: companyID
            },
            data:{
                ...info
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
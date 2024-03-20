import db from '../../db/index.js'

export async function createNewUser(userInfo) {
    try {
        return await db.user.create({
        data: userInfo
    })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function findUserByEmail(userEmail) {
    try {
        return await db.user.findUnique({
            where: {
                email: userEmail
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateUserInfo(userEmail, userInfo) {
    try {
        return await db.user.update({
            where: {
                email: userEmail
            },
            data: userInfo
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
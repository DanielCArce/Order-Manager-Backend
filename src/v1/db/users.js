import db from '../../db/index.js'
import Error from '../../utils/CustomError.js'
export async function createUser(userData) {
    try {
        let newUser = await db.user.create({
            data:userData
        })
        return newUser
    } catch (error) {
        throw new Error(error.message,'User Creation Fail','Database',403)
    }
}
export async function deleteUser(userEmail) {
    try {
        let userDeleted = await db.user.delete({
            where: {
                email: userEmail
            }
        })
        return userDeleted
    } catch (error) {
        throw new Error(error.message,'User Deleting Fail','Database',403)
    }
}
export async function updateUser(userEmail, userData) {
    try {
        let userUpdated = await db.user.update({
            where: {
                email: userEmail
            },
            data: userData
        })
        return userUpdated
        
    } catch (error) {
        throw new Error(error.message,'User Updating Fail','Database',403)
    }
}

export async function findUserByUserEmail(userEmail) {
    try {
        let userFinded = await db.user.findUnique({
            where: {
                email: userEmail
            },
            select: {
                email: true,
                role: true,
                password: true
            }
        })
        return userFinded
    } catch (error) {
        throw new Error(error.message,'User Finding User Fail','Database',403)
    }
}

export async function findAllUsers() {
    try {
        let allUsers = await db.user.findMany({})
        return allUsers
    } catch (error) {
        
    }
}
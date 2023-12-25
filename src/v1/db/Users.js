import db from './index.js'

export async function create_new_user(userInfo) {
    try {
        let newUser = await db.user.create({
            data: {
                userInfo
            }
        })
        return newUser
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function find_user_by_email(userEmail) {
    try {
        let userFinded = await db.user.findUnique({
            where: {
                email: userEmail
            }
        })
        return userFinded
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function update_user_by_email(userEmail, userData) {
    try {
        let userUpdated = await db.user.update({
            where: {
                email:userEmail
            },
            data:userData
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function drop_user_by_email(userEmail) {
    try {
        let userDroped = await db.user.delete({
            where: {
                email: userEmail
            }
        })
        return userDroped
    } catch (error) {
        throw new Error(error.message)
    }
}
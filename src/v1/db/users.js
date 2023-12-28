import db from '../../db/index.js'
import Error from '../../utils/CustomError.js'
export async function create_user(userData) {
    try {
        let userCreated = await db.user.create({
            data: userData
        })
        return userCreated
    } catch (error) {
        throw new Error(error.message, 'User creation', 'Database','UserCreaction')
    }
}

export async function update_user(userEmail, userData) {
    try {
        let userUpdated = await db.user.update({
            where: {
                email: userEmail
            },
            data:userData
        })
        return userUpdated
    } catch (error) {
        throw new Error(error.message, 'User updating', 'Database','UserUpdate')
    }
}
export async function find_user(userEmail) {
    try {
        let userFinded = await db.user.findUnique({
            where: {
                email: userEmail
            },
            select: {
                email: true,
                name: true,
                username: true,
                password:true
            }
        })
        return userFinded
    } catch (error) {
        throw new Error(error.message, 'User updating', 'Database','UserUpdate')
    }
}
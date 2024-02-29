import { createNewUser } from '../db/Users.js'
import {hashPassword} from '../utils/bcrypt.js'
export async function createUser(request, response, next) {
    try {
        const { name, email, password: rawPassword } = request.body
        const user = await createNewUser({
            name,
            email,
            password: await hashPassword(rawPassword)
        })
    return response.status(200).json({user})
    } catch (error) {
        return next(error)
    }
}

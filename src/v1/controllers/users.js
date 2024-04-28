import { createNewUser, updateUserInfo } from '../db/Users.js'
import { hashPassword } from '../../utils/bcrypt.js'
import { extractAuthorizationHeader} from '../../utils/extractHeader.js'
import {decodedToken} from '../../utils/jwt.js'
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
export async function updatePassword(request,response, next) {
    try {
        const {newPassword } = request.body
        const {payload} = await decodedToken(await extractAuthorizationHeader(request.headers))
        const user = await updateUserInfo(payload.email, { password: await hashPassword(newPassword) })
        return response.status(200).json({user})
    } catch (error) {
        return next(error)
    }
}

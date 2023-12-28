import { find_user } from '../db/users.js'
import { validate_encrypt_password} from '../../utils/bcrypt.js'
import {encrypt_token} from '../../utils/jwt.js'
export async function signIn(request, response, next) {
    const { username, password } = request.body
    try {
        let userFinded = await find_user(username)
        let isValidPassword = await validate_encrypt_password(password, userFinded.password)
        if (!isValidPassword) {
            response.sendStatus(403)
        }
        let token = await encrypt_token(userFinded)
        response
            .status(201)
            .json({
                token,
                "message":"User successfull signin"
            })

    } catch (error) {
        next(error)
    }
}
export async function signOut(request, response, next) {
    response.clearCookies().json({token:null,message:'SignOut successfull'})
}
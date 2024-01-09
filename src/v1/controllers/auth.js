import { validate_encrypt_password } from '../../utils/bcrypt.js'
import { findUserByUserEmail } from '../db/users.js'
import {encrypt_token} from '../../utils/jwt.js'
export async function postSignIn(request, response, next) {
    const userData = request.body
    try {
        let user = await findUserByUserEmail(userData.password)
        let isValidPassword = await validate_encrypt_password(userData.password, user.password)
        if (!isValidPassword) {
            response.sendStatus(403)
        }
        let token = await encrypt_token(user)
        response
            .status(200)
            .cookie('token', token, { httpOnly: true })
            .json({ token })

    } catch (error) {
        next(error)
    }
}

export async function getSignOut(request, response, next) {
    response.clearCookie('token')
}
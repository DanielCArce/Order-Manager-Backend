import { generateToken } from "../utils/jwt.js"
import { findUserByEmail } from '../db/Users.js'
import {isValidPassword} from '../utils/bcrypt.js'

export async function authorizationCtrl(request, response, next) {
    const { username: usernameAPI, password: passwordAPI } = request.body
    try {
    const userDB = await findUserByEmail(usernameAPI)
    const isValidPass = await isValidPassword(passwordAPI,userDB.password)
    console.log({ userDB, passwordAPI, isValidPass })
    if (isValidPass) {
        const token = await generateToken(userDB)
        return response.status(200).json({token})
    }
    return response.sendStatus(401)
    } catch (error) {
        next(error)   
    }
}
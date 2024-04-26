import { generateToken } from '../../utils/jwt.js'
import { findUserByEmail } from '../db/Users.js'
import {isValidPassword} from '../../utils/bcrypt.js'
import { sendNewEmail } from '../../utils/SendEmail.js';

export async function authorizationCtrl(request, response, next) {
    const { username: usernameAPI, password: passwordAPI } = request.body
    try {
    const userDB = await findUserByEmail(usernameAPI)
    const isValidPass = await isValidPassword(passwordAPI,userDB.password)
    if (isValidPass) {
        const token = await generateToken(userDB)
        return response.status(200).json({token})
    }
    return response.sendStatus(401)
    } catch (error) {
        next(error)   
    }
}
export async function recoveryPassord(request, response, next){
    const {username} = request.body
    try{
        const userDB = await findUserByEmail(username)
        if (userDB) {
            sendNewEmail({receptorEmail:userDB.email, subject:'Recovery Passowrd', htmlMessage:`<html>
            <body>
            <table style="width:100%; background-color:#f3f3f3">
  <tr>
    <td colspan="3" style="text-align:center; font-weight:700;">Recovery Password Email</td>
  </tr>
  <tr>
    <td>Estimado: ${userDB.email}</td>
  </tr>
  <tr>
    <td rowspan="2" colspan="2">La contraseña registrada es ${userDB.password}</td>
  </tr>
</table>
            </body>
            </html>`})
            return response.sendStatus(200)
        }
        return response.sendStatus(401)
    }catch(error){
        next(error)
    }
}
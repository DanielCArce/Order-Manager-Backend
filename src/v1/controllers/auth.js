import { generateToken } from '../../utils/jwt.js'
import { findUserByEmail,updateUserInfo } from '../db/Users.js'
import {isValidPassword, hashPassword} from '../../utils/bcrypt.js'
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
          const newPassword = userDB.password.slice(0,10)
          const dbu = await updateUserInfo(userDB.email,{password: await hashPassword(newPassword)})
           await sendNewEmail({receptorEmail:userDB.email, subject:'Recovery Passowrd', htmlMessage:`<html>
            <body>
            <table style="width:100%; background-color:#f3f3f3">
  <thead>
    <tr>
      <td colspan="3" style="text-align:center; padding:15px 0px; font-weight:900; text-transform: uppercase">Recuperación de Contraseña</td>
    </tr>
    <tr>
      <td colspan="3" style="text-align:center; padding:5px 0px; font-weight:600; text-transform: uppercase">FINA APP</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Estimado: ${userDB.name},</td>
    </tr>
    <tr>
      <td>Correo Electrónico: ${userDB.email}
      </td>
    </tr>
    <tr>
      <td>Nueva Contraseña: ${newPassword}
      </td>
    </tr>
  </tbody>
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
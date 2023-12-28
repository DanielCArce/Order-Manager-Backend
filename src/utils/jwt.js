import * as jwt from 'jsonwebtoken'
import Error from './CustomError.js'
export async function encrypt_token(payload) {
    try {
        let encryptToken = await jwt.sign(payload, process.env.TOKEN_SECRET)
        return encryptToken
    } catch (error) {
        throw new Error(error.message,'Token Encrypting','token',2001)
    }
    
}
export async function decrypt_token(payload) {
    try {
        let decodedToken = await jwt.verify(payload, process.env.TOKEN_SECRET)
        return decodedToken
    } catch (error) {
        throw new Error(error.message,'Token Verify','token',2002)
    }
}
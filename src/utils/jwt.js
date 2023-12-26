import * as jwt from 'jsonwebtoken'
import Error from './CustomError.js'
export async function generate_token(payload) {
    try {
        let token = await jwt.sign(payload, process.env.TOKEN_SECRET, { encoding: 'utf8' })
        return token
    } catch (error) {
        throw new Error(error.message, '301')
    }
    
}
export async function validate_token(token) {
try {
    let isValidToken = await jwt.verify(token, process.env.TOKEN_SECRET);
    return isValidToken
} catch (error) {
    throw new Error(error.message, '302')
}
}
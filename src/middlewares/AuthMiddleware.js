import { isValidToken } from '../utils/jwt.js'
import {extractAuthorizationHeader} from '../utils/extractHeader.js'
export default async function AuthMiddleware(request, response, next) {
    try {
        const token = await extractAuthorizationHeader(request.headers)
        if (token == null) {
            response.sendStatus(401)
        }
        const isValid = await isValidToken(token)
        if (isValid) {
            return next()
        }
    } catch (error) {
        next(error)
    }
}
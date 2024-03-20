import {isValidToken} from '../utils/jwt.js'
export default async function AuthMiddleware(request, response, next) {
    try {
        const rawToken = request.headers['authorization']
        if (rawToken == undefined || rawToken == null || rawToken == "") {
            return response.sendStatus(401)
        }
        const token = rawToken.split(' ')[1]
        const isValid = await isValidToken(token)
        if (isValid) {
            return next()
        }
    } catch (error) {
        next(error)
    }
}
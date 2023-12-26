import {validate_token} from '../utils/jwt.js'
export default async function AuthMiddleware(request, response, next) {
    const rawToken = request.headers['authorization']
    const token = rawToken.split(' ')[1]
    if (token == null) {
        response.sendStatus(403)
    }
    try {
        let decodedUser = await validate_token(token)
        request.user = decodedUser
        next()
    } catch (error) {
        next(error)
    }    
}

import {isValidToken} from '../utils/jwt.js'
export default async function AuthMiddleware(request, response, next) {
    try {
        const token = request.headers['authorization'].split(' ')[1]
        const validationToken = await isValidToken(token)
        console.log({token, validationToken})
        if (validationToken) {
            return next()
        }
        response.sendStatus(401)
        console.log({ body: request.body })
    } catch (error) {
        next(error)
    }
}
import {decrypt_token} from '../utils/jwt.js'

export default async function AuthMiddleware(request, response, next){
    let headerWithToken = request.headers['authorization']
    let token = headerWithToken.split(' ')[1]
    if (token == null) {
        response.sendStatus(403)
    }
    try {
        let decodedToken = await decrypt_token(token)
        request.user = decodedToken
        next()
    } catch (error) {
        next(error)
    }
}
import {decrypt_token} from '../utils/jwt.js'
import Error from '../utils/CustomError.js'
export default async function AuthMiddleware(request, response, next){
    const headerWithToken = request.headers['authorization']
    console.log({headerWithToken})
    if (headerWithToken === undefined) {
        // next(new Error('token is undefined','Authorization Fail','AuthMiddleware',403))
        return response.status(401).json({message:'Not token provided'})
    }
    try {
        const token = headerWithToken.split(' ')[1]
        if (token == null || token == undefined) {
            next(new Error('token is undefined','Authorization Fail','AuthMiddleware',403))
        }
        const decodedToken = await decrypt_token(token)
        request.user = decodedToken
        next()
    } catch (error) {
        next(error)
    }
}
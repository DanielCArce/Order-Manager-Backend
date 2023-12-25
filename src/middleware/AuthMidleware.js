import { validate_jwt } from "../utils/jwt.js"

async function AuthMidleware(request, response, next) { 
    let rawToken = request.headers['authorization']
    // console.log({rawToken, headers:request.headers})
    if (rawToken === undefined || rawToken === null) {
       return response.sendStatus(403)
    }
    let token = rawToken.split(' ')[1]
    let isValidToken = await validate_jwt(token)
    if (!isValidToken) {
        return response.sendStatus(403)
    }
        request.user = isValidToken
        return next()
}

export default AuthMidleware
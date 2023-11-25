import { validate_jwt } from "../utils/jwt.jss"

async function AuthMidleware(request, response, next) { 
    let { token } = request.cookies
    let isValidToken = await validate_jwt(token)
        Request.user = isValidToken
        next()
}

export default AuthMidleware
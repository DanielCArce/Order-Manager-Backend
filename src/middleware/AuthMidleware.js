import { validate_jwt } from "../utils/jwt.js"

async function AuthMidleware(request, response, next) { 
    let { token } = request.cookies
    let isValidToken = await validate_jwt(token)
        request.user = isValidToken
        next()
}

export default AuthMidleware
import { validate_jwt } from "../utils/jwt.js"

async function AuthMidleware(request, response, next) { 
    let { token } = request.cookies
    console.log({ token })
    if (token === undefined || token === null) {
        return response.sendStatus(403)
    }
    let isValidToken = await validate_jwt(token)
        console.log({token,isValidToken})
        request.user = isValidToken
        next()
}

export default AuthMidleware
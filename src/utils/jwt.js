import jwt from 'jsonwebtoken'

export async function create_jwt(payload) {
    
    try {
        let jwt_token = await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        return jwt_token    
    } catch (error) {
        console.error(error.message)
    }
    
}

export async function validate_jwt(token) {
    console.log({token})
    if (!token) {
        return false
    }
    try {
        let user = await jwt.verify(token, process.env.TOKEN_SECRET);
        return user;    
    } catch (error) {
        console.error(error)
        return false
    }
    
}
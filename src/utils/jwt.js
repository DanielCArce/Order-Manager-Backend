import jwt from 'jsonwebtoken'

export async function create_jwt(payload) {
    
    try {
        let jwt_token = await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        return jwt_token    
    } catch (error) {
        throw new Error('Error generating the token')
    }
    
}

export async function validate_jwt(token) {
    try {
        let user = await jwt.verify(token, process.env.TOKEN_SECRET);
        return user;    
    } catch (error) {
        throw new Error('Error validating the token')
    }
    
}
import jwt from 'jsonwebtoken'
import ApiError from './Error.js';

export async function create_jwt(payload) {
    
    try {
        let jwt_token = await jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1h' })
        return jwt_token    
    } catch (error) {
        throw new ApiError('Token is not generated','Token',error.message)
    }
    
}

export async function validate_jwt(token) {
    if (token === undefined || token === null) {
        throw new ApiError('Token isnt provided','Token','Oups Token is not provided')
    }
    try {
        let user = await jwt.verify(token, process.env.TOKEN_SECRET);
        return user;    
    } catch (error) {
       throw new ApiError('Token is not generated','Token',error.message)
    }
    
}
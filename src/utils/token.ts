import {IUserToken} from '@dto/AuthToken'
import jwt, { Jwt } from 'jsonwebtoken'
const TOKEN_SECRET = process.env.SECRET;
export async function generateToken(payload: IUserToken) {
    if(TOKEN_SECRET){
        return jwt.sign(payload, TOKEN_SECRET)
    }
}
export async function validateHeader(rawHeader: string) {
    let [tokenType, tokenPayload] = rawHeader.split(' ');
    console.log({ tokenType, tokenPayload })
    return {
        token: tokenPayload,
        auth: tokenType
    }
}
export async function decodeTooken(token: string) {
    if (TOKEN_SECRET) {
        const { payload } = jwt.verify(token, TOKEN_SECRET) as Jwt;
        return payload;
        
    }
}
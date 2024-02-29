import JWT from 'jsonwebtoken'
const SECRET = process.env.SECRET || 'DanielCArce130394'
export async function generateToken(payload) {
    return await JWT.sign({payload},SECRET)
}
export async function isValidToken(hashedToken) {
    return await JWT.verify(hashedToken, SECRET)
}
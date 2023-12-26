import { compare, hash, genSalt } from 'bcrypt'
import Error from './CustomError.js'
async function generate_salt() {
    const saltRounds = Number(process.env.SALT_ROUNDS) || 30
    return await genSalt(saltRounds)
}
export async function hash_password(rawPassword) {
    try {
        let salt = await generate_salt()
        return hash(rawPassword,salt)
    } catch (error) {
        throw new Error(error.message, '201')
    }
}
export async function compare_password(rawPassword, cryptoPassword) {
    try {
        let isEqual = await compare(rawPassword, cryptoPassword)
        return isEqual
    } catch (error) {
        throw new Error(error.message, '202')
    }
}
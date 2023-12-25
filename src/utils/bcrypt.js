import {hash, genSalt, compare} from 'bcrypt'

async function generate_salt() {
    try {
        let salt = await genSalt(Number(process.env.SALT_ROUNDS))
        return salt
        
    } catch (error) {
        console.error(error.message)
    }
}
export async function generate_hash_password(rawPassword) {
    try {
        return await hash(rawPassword, await generate_salt())
        
    } catch (error) {
        console.error(error.message)
    }
}
export async function compare_hashed_password(rawPassword, hashedPassword) {
    try {
        return await compare(rawPassword,hashedPassword)
    } catch (error) {
        console.log(error.message)
    }
}
import {hash, genSalt, compare} from 'bcrypt'

async function generate_salt() {
    console.log({roundes:process.env.SALT_ROUNDS})
    let salt = await genSalt(Number(process.env.SALT_ROUNDS))
    return salt
}
export async function generate_hash_password(rawPassword) {
    return await hash(rawPassword, await generate_salt())
}
export async function compare_hashed_password(rawPassword, hashedPassword) {
    return await compare(rawPassword,hashedPassword)
}
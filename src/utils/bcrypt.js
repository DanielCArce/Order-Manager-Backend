import * as bcrypt from 'bcrypt'
async function generateSalt() {
    return bcrypt.genSalt(10)
}
export async function hashPassword(payload) {
    let salt = await generateSalt()
    return await bcrypt.hash(payload,salt)
}
export async function isValidPassword(rawPassword,hashedPassword) {
    return await bcrypt.compare(rawPassword,hashedPassword)
}
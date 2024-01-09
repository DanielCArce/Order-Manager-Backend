import * as bcrypt from 'bcrypt'
import Error from './CustomError.js'

async function generateSalt() {
    try {
        let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
        return salt
    } catch (error) {
        throw new Error(error.message,'Encrypting','security',1002)
    }
}
export async function encrypt_password(planPassword) {
    let salt = await generateSalt()
    try {
        let hashedPassword = await bcrypt.hash(planPassword, salt)
        return hashedPassword
    } catch (error) {
        throw new Error(error.message,'Encrypting','security',1002)
    }
    
}
export async function validate_encrypt_password(plainPassword, encrypt_password) {
    try {
        let isValidPassword = await bcrypt.compare(plainPassword, encrypt_password)
        return isValidPassword
        
    } catch (error) {
        throw new Error(error.message,'Validating Encrypting','security',1003)
    }
}
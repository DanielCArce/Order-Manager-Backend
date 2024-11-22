import bcrypt from 'bcrypt'
const saltRounds = 20;

export async function generateHash(plainValue: string) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainValue, salt);
    return hash;
}
export async function compareHash(plainValue: string, hashedValue: string) {
    const isEqualValid = await bcrypt.compare(plainValue, hashedValue);
    return isEqualValid;
}
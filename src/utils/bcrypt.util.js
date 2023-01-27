import bcrypt from 'bcrypt'

export const hashContent = async (plainText) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(plainText, saltRounds)
    return hash
} 
export const compareContent = async (plainText, hash) => {
    return await bcrypt.compare(plainText, hash)
} 
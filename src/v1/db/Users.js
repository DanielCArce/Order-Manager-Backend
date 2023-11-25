import db from './index.js'

export async function newUser(userData) {
    try {
        return db.user.create({
        data: userData,
        select: {
            email: true,
            name: true,
            role: true,
            username:true
        }
    })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function findUserByEmail(userEmail) {
    try {
        return db.user.findUnique({
            where: {
                email: userEmail
            },
            select: {
            email: true,
            name: true,
            role: true,
            username:true
        }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function findAllUsers() {
    try {
        return db.user.findMany({
            select: {
            email: true,
            name: true,
            role: true,
            username:true
        }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateUser(userEmail, userData) {
    try {
        db.user.update({
            where: {
                email:userEmail
            },
            data: userData
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function deleteUser(userEmail){
    try {
        db.user.delete({
            where: {
                email: userEmail
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
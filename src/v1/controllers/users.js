import { createUser, deleteUser, findUserByUserEmail, updateUser, findAllUsers } from '../db/users.js'
import {encrypt_password} from '../../utils/bcrypt.js'
export async function getUserByUserEmail(request, response, next) {
    const { email } = request.body
    try {
        let user = await findUserByUserEmail(email)
        response
            .status(200)
            .json({ data: user })
    } catch (error) {
        next(error)
    }

}
export async function postUser(request, response, next) {
    const user = request.body
    try {
        let newUser = await createUser({ ...user, password: await encrypt_password(user.password) })
        response
            .status(200)
            .json({ data: newUser })
    } catch (error) {
        next(error)
    }

}
export async function putUser(request, response, next) {
    const userEmail = request.params.userEmail
    const userData = request.body
    try {
        let user = await updateUser(userEmail, userData)
        response
            .status(200)
            .json({
            userEmail, user
        })
    } catch (error) {
        next(error)
    }
}

export async function deleteUsers(request, response, next) {
    const userEmail = request.params.userEmail
    try {
        let user = await deleteUser(userEmail)
        response
            .status(200)
            .json({
            user
        })
    } catch (error) {
        next(error)
    }
}
export async function getAllUsers(request, response, next) {
 try {
     let allUsers = await findAllUsers()
     response
         .status(200)
         .json({ allUsers })
 } catch (error) {
    next(error)
 }   
}
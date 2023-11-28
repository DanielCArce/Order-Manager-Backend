import { deleteUser, findAllUsers, findUserByEmail, newUser, updateUser } from '../db/Users.js'

export async function postNewUser(req, res) {
    let { user } = req.body
    let tempUser = await newUser(user)
    res.status(201).json(tempUser)

}
export async function getAllUsers(req, res) {
    let tempUsers = await findAllUsers()
    res.status(201).json(tempUsers)
}
export async function getUserByEmail(req, res) {
    let { userEmail } = req.params
    let tempUser = await findUserByEmail(userEmail)
    res.status(201).json(tempUser)
}

export async function putUserByEmail(req, res) {
    let { userEmail, data } = req.body
    let tempUser = await updateUser(userEmail, data)
    res.status(201).json(tempUser)
}

export async function deleteUserByEmail(req, res) {
    let { userEmail } = req.body
    let tempUser = await deleteUser(userEmail)
    res.status(201).json(tempUser)
}
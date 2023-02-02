import {db} from './index.js'

export function newClient(client) {
    db.client.create({data:client})
}
export function getAllClient(){
    return db.client.findMany({})
}
export function getClientById(id) {
    return db.client.findUnique({
        where: {
            id: id
        }
    })
}
export function updateClient(id, updateData) {
    return db.client.update({
        where: {
            id: id
        },
        data: {
            updateData
        }
    })
}
import db from '../../db/index.js'
import Error from '../../utils/CustomError.js'
export async function createClientProvider(clientData) {
    try {
        const cliendProvided = await db.clientsOrProviders.create({
            data: clientData
        })
        return cliendProvided
    } catch (error) {
        throw new Error(error.message,'Client Cant be created','Database',403)
    }
}
export async function updateClientProvider(clientID, clientData) {
    try {
        const updatedClientProv = await db.clientsOrProviders.update({
            where: {
                id: clientID
            },
            data: clientData
        })
    return updatedClientProv
    } catch (error) {
        throw new Error(error.message,'Client Cant be created','Database',403)
    }
}
export async function deleteClientProvider(clientID) {
    try {
        const deletedClientProv = await db.clientsOrProviders.delete({
            where: {
                id: clientID
            }
        })
    return deletedClientProv
    } catch (error) {
        throw new Error(error.message,'Client Cant be created','Database',403)
    }
}
import { createClientProvider, deleteClientProvider as delClientProv, updateClientProvider } from '../db/clientsproviders.js'

export async function postClient(request, response, next) {
    const clientProvider = request.body
    try {
        const clientProv = await createClientProvider(clientProvider)
        response.status(200).json({clientProv})
    } catch (error) {
        next(error)
    }
}
export async function putClient(request, response, next) {
    const clientProviderID = request.params.clientProviderID
    const clientData = request.body
    try {
        const clientProv = await updateClientProvider(clientProviderID,clientData)
        response.status(200).json({clientProv})
    } catch (error) {
        next(error)
    }
}
export async function deleteClientProvider(request, response, next) {
    const clientProv = request.params.clientID
    try {
    const clientDeleted = await delClientProv(clientProv)
    response.status(200).json({clientDeleted})
    } catch (error) {
        next(error)
    }
}
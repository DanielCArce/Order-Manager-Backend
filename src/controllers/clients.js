import { getAllClient, getClientById, updateClient, newClient } from '../db/clients.js'


export async function handleAllClients(req, res) {
    const allClients = await getAllClient
    res.json({allClients })
}
export async function handleClientById(req, res) {
    const { id } = req.params;
    const clientById = await getClientById(id);
    res.json({clientById})
}
export async function handleNewClient(req, res) {
    const { clientInfo } = req.body;
    const client = await newClient(clientInfo)
    res.json({client})
}
export async function handleUpdateClient(req, res) {
    const { id } = req.params;
    const { updateInfo } = req.body;
    const clientUpdate = await updateClient(id, updateInfo)
    res.json({clientUpdate})
}

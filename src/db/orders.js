import { db } from './index.js'


export function newOrder(order) {
    db.order.create({data:order})
}
export function getAllOrders(){
    return db.order.findMany({})
}
export function getOrderById(id) {
    return db.order.findUnique({
        where: {
            id: id
        }
    })
}
export function getOrderByClient(cliendId) {
    return db.order.findUnique({
        where: {
            client:clientId
        }
    })
}
export function updateOrder(id, updateData) {
    return db.order.update({
        where: {
            id: id
        },
        data: {
            updateData
        }
    })
}

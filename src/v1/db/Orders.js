import db from './index.js'

export async function newOrder(orderData) {
    try {
        return db.order.create({
        data:orderData
    })
    } catch (error) {
      throw new Error(error.message)  
    }
}
export async function findOnderByOrderID(orderID) {
    try {
        return db.order.findUnique({
            where: {
                order_id:orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)  
    }
}
export async function findOrderByCliendID(cliendID) {
    try {
        return db.order.findMany({
            where: {
                client_id: cliendID
            }
        })
    } catch (error) {
        throw new Error(error.message)  
    }
}
export async function findAllOrders() {
    try {
        return db.order.findMany()
    } catch (error) {
        throw new Error(error.message)  
    }
}
export async function deleteOrderByOrderID(orderID) {
    try {
        return db.order.delete({
            where: {
                order_id: orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)  
    }
}
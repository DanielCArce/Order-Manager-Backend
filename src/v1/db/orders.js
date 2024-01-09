import db from '../../db/index.js'
import Error from '../../utils/CustomError.js'

export async function createOrder(orderData) {
    try {
        let newOrder = await db.order.create({
            data: orderData
        })
        return newOrder
    } catch (error) {
        throw new Error(error.message,'Order Creation Fail','Database',1001)
    }
}
export async function updateOrder(orderID, orderData) {
    try {
        let updatedOrder = await db.order.update({
            where: {
                orderID : orderID
            },
            data:orderData
        })
        return updatedOrder
    } catch (error) {
        throw new Error(error.message,'Order Creation Fail','Database',1001)
    }
}
export async function deleteOrder(orderID) {
    try {
        let deleteOrder = await db.order.delete({
            where: {
                orderID: orderID
            }
        })
        return deleteOrder
    } catch (error) {
        throw new Error(error.message,'Order Creation Fail','Database',1001)
    }
}
export async function getAllOrders() { 
    try {
        let allOrders = await db.order.findMany({})
        return allOrders
    } catch (error) {
        throw new Error(error.message,'Order Obtaining Fail','Database',1001)
    }
}
export async function getOrderByOrderID(orderID) {
    try {
        let allOrders = await db.order.findUnique({
            where: {
                orderID: orderID
            }
        })
        return allOrders
    } catch (error) {
        throw new Error(error.message,'Order Obtaining Fail','Database',1001)
    }
}
import db from '../../db/index.js'
import Error from '../../utils/CustomError.js'
export async function createShippipng(shippingInfo) {
    try {
        return await db.shippingOrders.create({
            data:shippingInfo
        })
    } catch (error) {
        throw new Error(error.message, 'Database','Database',1001)
    }
}
export async function obtainShippingByClientID(shipping, clientID) {
    try {
        return await db.shippingOrders.findMany({
            where: {
                clientID
            },
            include:{}
        })
    } catch (error) {
        throw new Error(error.message, 'Database','Database',1001)
    }
}
export async function addShippingToOrder(shippingID, orderID) {
    try {
     const orderShipping = await db.ordersWithShipping.create({
        data: {
            orderID,
            shippingID
        }
    })
    return orderShipping   
    } catch (error) {
        throw new Error(error.message, 'Database','Database',1001)
    }
}
//wp$2024da
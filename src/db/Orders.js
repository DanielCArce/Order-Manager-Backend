import db from './index.js'

export async function createNewOrder(orderInfo, clientID) {
    try {
        return await db.order.create({
            data: {
                ...orderInfo,
                clientID: {
                    connect: {id:clientID}
                }
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateStatusOrder(orderID, orderStatus) {
    try {
        return await db.order.update({
            where: {
                orderID
            },
            data: {
                status: orderStatus
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getAllOrders(status = null) {
    try {
        if (status !== null) {
            return await db.order.findMany({where:{status}})
        }
        return await db.order.findMany()
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getOrderByOrderID(orderID, includeShippings= false) {
    try {
        if (includeShippings) {
          return await db.order.findUnique({
            where: {
                orderID
              },
              include: {
                  shippings
              }
        })  
        }
        return await db.order.findUnique({
            where: {
                orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

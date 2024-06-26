import db from '../../db/index.js'

export async function createNewOrder(orderInfo, clientID) {
    try {
        return await db.orders.create({
            data: {
                ...orderInfo,
                clientID
            },
            include: {
                client: {
                    select: {
                        name: true,
                        isFE: true,
                        email: true,
                    }
                }
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function updateStatusOrder(orderID, orderStatus) {
    try {
        return await db.orders.update({
            where: {
                orderID
            },
            data: orderStatus
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getAllOrders(includeClients) {
    try {
        if(includeClients){
            return await db.orders.findMany({
             include: {
                client: {
                    select: {
                    name: true,
                        isFE: true,
                    email:true,
                    
                }
            }
        }
        })
        }
        return await db.orders.findMany({})
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getOrderByOrderID(orderID, includeShippings= false) {
    try {
        if (includeShippings) {
          return await db.orders.findUnique({
            where: {
                orderID
              },
              include: {
                  shippings: {
                      select: {
                          items: true,
                          shippingID: true,
                          date: true
                      }
                  }
              }
        })  
        }
        return await db.orders.findUnique({
            where: {
                orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

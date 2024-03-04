import db from './index.js'

export async function createNewShipping(shippingInfo, orderID) {
    try {
        return db.shipping.create({
            data: {
                ...shippingInfo,
                orderID: {
                    connect: {
                        id: orderID
                    }
                }
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getShippingbyID(shippingID) {
    try {
        return db.shipping.findFirst({
            where: {
                id: shippingID,
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
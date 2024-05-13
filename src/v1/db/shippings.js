import db from '../../db/index.js'

export async function createNewShipping(shippingInfo, orderID) {
    try {
        return db.shippings.create({
            data: {
                items: shippingInfo.items,
                pricePerInch: shippingInfo.pricePerInch,
                orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getShippingbyID(shippingID) {
    try {
        return db.shippings.findFirst({
            where: {
                id: shippingID,
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function getAllShippings(){
    try{
        return db.shippings.findMany()
    }
    catch(error){
        throw new Error(error.message)
    }
}
export async function getShippingbyOrder(orderID) {
    try {
        return db.shippings.findMany({
            where: {
                orderID: orderID
            }
        })
    } catch (error) {
        throw new Error(error.message)
    }
}
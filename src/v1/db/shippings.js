import db from '../../db/index.js'

export async function createNewShipping(shippingInfo, orderID) {
    try {
        return db.shippings.create({
            data: {
                ...shippingInfo,
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
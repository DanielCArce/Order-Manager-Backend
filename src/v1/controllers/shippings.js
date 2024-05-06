import { createNewShipping, getShippingbyID, getAllShippings,getShippingbyOrder } from '../db/shippings.js'

export async function newShipping(request, response, next) {
    try {
        const shippingInfo = request.body.shipping
        const orderID = request.body.orderID
        const shipping = await createNewShipping(shippingInfo, orderID)
        return response.status(200).json({shipping})
    } catch (error) {
        return next(error)
    }
}
export async function shippingByID(request, response, next) {
    try {
        const shippingID = request.params.shippingID
        const shippingFinded = await getShippingbyID(shippingID)
        return response.status(200).json({shippingFinded})
    } catch (error) {
        return next(error)
    }
}
export async function getShippings(request, response, next){
    try{
        const shippings = await getAllShippings()
        return response.status(200).json({shippings})
    } catch(error){
        return next(error)
    }

}
export async function getShippingsByOrderID(request, response, next) {
    try {
        const allShippingByOrders = await getShippingbyOrder(request.params.orderID)
        return response.status(200).json({allShippingByOrders})
    } catch (error) {
        return next(error)
    }
}
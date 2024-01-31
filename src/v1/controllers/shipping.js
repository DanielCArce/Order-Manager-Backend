import { addShippingToOrder, createShippipng } from '../db/shipping.js'

export async function postNewShipping(request, response, next) {
    const shippingInfo = request.body

    try {
        const shippingAdded = await createShippipng(shippingInfo)
        response.status(200).json({shippingAdded})
    } catch (error) {
        next(error)
    }
}

export async function postShippindToOrder(request, response, next) {
    const { shippingID, orderID } = request.body
    
    try {
        const shippingOrders = await addShippingToOrder(shippingID, orderID)
        response.status(200).json({shippingOrders})
    } catch (error) {
        next(error)
    }
}
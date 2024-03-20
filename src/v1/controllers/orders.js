import { createNewOrder, getAllOrders, getOrderByOrderID, updateStatusOrder } from '../db/Orders.js'

export async function getOrders(request, response, next) {
    try {
        const orders = await getAllOrders()
        
        return response.status(200).json({orders})
    } catch (error) {
        return next(error)
    }
}
export async function newOrder(request,response, next) {
    try {
        const orderInfo = request.body.order
        const clientID = request.body.clientID
        
        const newOrder = await createNewOrder(orderInfo, clientID)
        return response.status(201).json({newOrder})
    } catch (error) {
        return next(error)
    }
}
export async function getOrderOrderID(request, response, next) {
    try {
        const orderID = request.params.orderID
        const includeShippings = request.params?.includeShippings
        if (includeShippings !== undefined || includeShippings !== false || includeShippings !== null) {
            const order = await getOrderByOrderID(orderID, includeShippings)
            return response.status(200).json({order})
        }
        const order = await getOrderByOrderID(order)
        return response.status(200).json({order})
    } catch (error) {
        return next(error)
    }
}
export async function updateOrderInfo(request, response, next) {
    try {
        const orderID = request.params.orderID
        const orderUpdatedInfo = request.body
        const updatedOrder = await updateStatusOrder(orderID, orderUpdatedInfo)
        return response.status(201).json({updatedOrder})
    } catch (error) {
        return next(error)
    }
}
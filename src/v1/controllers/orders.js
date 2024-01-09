import { createOrder, deleteOrder, updateOrder, getAllOrders as allOrders, getOrderByOrderID as OrdersByID  } from '../db/orders.js'
import Error from '../../utils/CustomError.js'

export async function postOrder(request, response, next) {
    const order = request.body
    try {
        const order = await createOrder(order)
        response.status(200).json({order})
    } catch (error) {
        next(error)    
    }
}

export async function deleteOrders(request, response, next) {
    const orderID = request.params.orderID
    try {
        const delOrder = await deleteOrder(orderID)
        response.status(200).json({delOrder})
    } catch (error) {
        next(error)
    }
}
export async function getAllOrders(request, response, next) {
    try {
        const orders = await allOrders()
        response.status(200).json({orders})
    } catch (error) {
        next(error)
    }
}
export async function getOrderByOrderID(request, response, next) {
    const orderID = request.params.orderID
    try {
        const order = await OrdersByID(orderID)
        response.status(200).json({order})
    } catch (error) {
        next(error)
    }
}
export async function putOrder(request, response, next) {
    const orderID = request.params.orderID
    const order = request.body
    try {
        let orders = await updateOrder(orderID, order)
        response.status(200).json({orders})
    } catch (error) {
        next(error)
    }
}
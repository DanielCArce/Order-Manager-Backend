import {deleteOrderByOrderID, findAllOrders, findOnderByOrderID, findOrderByCliendID, newOrder, updateOrderStatusByOrderID} from '../db/Orders.js'
export async function postNewOrder(req, res){
    let { order } = req.body
    let tempOrder = await newOrder(order)
    res.status(201).json(tempOrder)
}
export async function getAllOrders(req, res){
    let tempOrders = await findAllOrders()
    res.status(201).json(tempOrders)
}
export async function getOrderByID(req, res) {
    let { orderID } = req.params
    let tempOrder = await findOnderByOrderID(orderID)
    res.status(201).json(tempOrder)
}
export async function getOrderByCliendID(req, res) {
    let { cliendID } = req.params
    let tempOrders = await findOrderByCliendID(cliendID)
    res.status(201).json(tempOrders)
}
export async function deleteOrderByOrder(req, res) {
    let { orderID } = req.params
    let tempOrder = await deleteOrderByOrderID(orderID)
    res.status(201).json(tempOrder)
}
export async function putOrderStatus(req, res) {
    let { order, orderID } = req.body
    let tempOrder = await updateOrderStatusByOrderID(orderID, order)
    res.status(201).json(tempOrder)
}
import { Request, Response } from 'express'
import OrderService from '@services/OrderService'
import { eStatus } from '@prisma/client';
const service = new OrderService()
export async function CreateOrderController(request: Request, response: Response) {
    const orderDetails = request.body;
    await service.create(orderDetails);
    response.status(201);
}
export async function UpdateOrderStatusController(request: Request, response: Response) {
    const { orderID } = request.params;
    let orderId = Number(orderID)
    await service.update(orderId, {
        status: eStatus.COMPLETED
    })
}
export async function GetAllOrders(request: Request, response: Response) {
    const allOrdersAvailables = await service.findAll();
    response.status(200).json({
        allOrdersAvailables
    })
}
export async function GetOrderByOrderID(request: Request, response: Response) {
    const { orderID } = request.params;
    let orderId = Number(orderID);
    const orderFinded = await service.findById(orderId)
    if (orderFinded != null) {
        response.status(201).json({order: orderFinded})
    }
}